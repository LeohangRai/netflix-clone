const { prisma } = require('../database');
const { object, string } = require('zod');

async function isEmailUnique(email) {
  const user = await prisma.users.findFirst({
    where: {
      email
    }
  });
  return !user;
}

async function isUsernameUnique(username) {
  const user = await prisma.users.findFirst({
    where: {
      username
    }
  });
  return !user;
}

const registerUserSchema = object({
  body: object({
    username: string({ required_error: 'Username is required' })
      .min(8, 'Username must have at least 8 characters')
      .max(20, 'Username should not exceed 20 characters')
      .regex(/^[a-z][a-z0-9_]{7,19}$/, 'Invalid username')
      .refine(isUsernameUnique, { message: 'Username already in use' }),

    password: string({ required_error: 'Password is required' })
      .min(8, 'Password must be at least 8 characters long')
      .max(20, 'Password size must not exceed 20 characters'),

    confirmPassword: string({
      required_error: 'Confirm password is required'
    }),

    email: string({
      required_error: 'Email is required'
    })
      .email()
      .refine(isEmailUnique, { message: 'Email already in use' })
  }).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Password and confirm password do not match',
    path: ['confirmPassword']
  })
});

module.exports = {
  registerUserSchema
};
