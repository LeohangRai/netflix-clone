const { PrismaClient } = require('@prisma/client');
const {
  hashPasswordBeforeCreateOrUpdate
} = require('../../prisma/extensions/users.extensions');

/* 
  Prisma Middlewares have been deprecated since version 4.16.0.
  Prisma Client extensions query component type is recommended as an alternative to middleware.
  Prisma Client extensions allow you to create independent Prisma Client instances and bind each client to a specific filter or user. For example, you could bind clients to specific users to provide user isolation. Prisma Client extensions also provide end-to-end type safety.
*/

module.exports = {
  prisma: new PrismaClient().$extends(hashPasswordBeforeCreateOrUpdate)
};
