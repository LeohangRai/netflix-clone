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

async function getProfile(req, res) {
  const user = req.user;
  const profile = await prisma.users.findUnique({
    where: {
      id: user.id
    }
  });
  const { username, email } = profile;
  return res.status(StatusCodes.OK).json({
    status: 'success',
    data: { username, email }
  });
}

module.exports = {
  registerUser,
  getProfile
};
