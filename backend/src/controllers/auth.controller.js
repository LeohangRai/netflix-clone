const { prisma } = require('../database');
const { removeBlankEntries } = require('../utils');
const { StatusCodes } = require('http-status-codes');

function transformUserData(userData) {
  const { username, email } = userData;
  return { username, email };
}

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  const userData = removeBlankEntries({ username, email, password });
  const newUser = await prisma.users.create({
    data: userData
  });
  return res.status(StatusCodes.CREATED).json({
    status: 'success',
    data: transformUserData(newUser)
  });
}

module.exports = {
  registerUser
};
