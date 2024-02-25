const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const { prisma } = require('../database');
const { SERVER_CONFIGS } = require('.');

const localStrategyOpts = {
  usernameField: 'username',
  passwordField: 'password'
};

const jwtStrategyOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SERVER_CONFIGS.JWT_SECRET
};

passport.use(
  new LocalStrategy(localStrategyOpts, async (username, password, done) => {
    try {
      const user = await prisma.users.findOneForLogin({
        where: {
          OR: [{ username }, { email: username }]
        }
      });
      if (!user?.isPasswordValid(password)) {
        return done(null, false, {
          message: 'Invalid username/password'
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.use(
  new JWTStrategy(jwtStrategyOpts, async (jwtPayload, done) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          id: jwtPayload.id
        }
      });
      if (!user) {
        return done(null, false, {
          message: 'Invalid token'
        });
      }
      return done(null, user, jwtPayload);
    } catch (error) {
      return done(error);
    }
  })
);
