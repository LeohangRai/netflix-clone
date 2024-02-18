const bcrypt = require('bcrypt');

const hashPasswordBeforeCreateOrUpdate = {
  name: 'hashPasswordBeforeCreateOrUpdate',
  query: {
    users: {
      $allOperations({ operation, args, query }) {
        if (['create', 'udpate'].includes(operation) && args.data['password']) {
          args.data['password'] = bcrypt.hashSync(args.data['password'], 10);
        }
        return query(args);
      }
    }
  }
};

module.exports = {
  hashPasswordBeforeCreateOrUpdate
};
