const { Prisma } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SERVER_CONFIGS } = require('../../src/configs');

/* 
  extension to modify the 'create' and 'update' queries on the 'users' model and hash the password every time an update on the 'password' field takes place
  NOTE: The 'query' Prisma Client extensionn component type can be used to hook into the query life-cycle and modify an incoming query or its result
*/
const hashPasswordBeforeCreateOrUpdate = {
  name: 'hashPasswordBeforeCreateOrUpdate',
  query: {
    users: {
      $allOperations({ operation, args, query }) {
        if (
          ['create', 'update'].includes(operation) &&
          args.data?.['password']
        ) {
          args.data['password'] = bcrypt.hashSync(args.data['password'], 10);
        }
        return query(args);
      }
    }
  }
};

/* 
  extension to attach a static method 'findOneForLogin' to the 'users' model 
  NOTE: The 'model' Prisma Client extension component type can be used to add custom methods to our models.
*/
const findOneForLogin = {
  name: 'findOneForLogin',
  model: {
    users: {
      async findOneForLogin(condition) {
        const user =
          await Prisma.getExtensionContext(this).findFirst(condition);
        if (!user) return null;
        const { id, username, email, isPasswordValid } = user;
        return {
          id,
          username,
          email,
          isPasswordValid,
          token: jwt.sign({ id, username }, SERVER_CONFIGS.JWT_SECRET)
        };
      }
    }
  }
};

/* 
  extension to attach an instance method 'isPasswordValid' to the results of the 'users' model
  NOTE: The 'result' Prisma Client extension component type can be used to add custom fields or methods to query results.
*/
const isPasswordValid = {
  name: 'isPasswordValid',
  result: {
    users: {
      isPasswordValid: {
        needs: { password: true },
        compute(user) {
          return (rawPassword) => {
            return bcrypt.compareSync(rawPassword, user.password);
          };
        }
      }
    }
  }
};

module.exports = {
  hashPasswordBeforeCreateOrUpdate,
  findOneForLogin,
  isPasswordValid
};
