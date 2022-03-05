'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email:"spidey@spider.man",
        username: "Spidey",
        hashedPassword: bcrypt.hashSync("password4")
      },
      {
        email:"doctor@seuss.com",
        username: "Seuss",
        hashedPassword: bcrypt.hashSync("password5")
      },
      {
        email:"horton@hears.who",
        username: "Horton",
        hashedPassword: bcrypt.hashSync("password6")
      },
      {
        email:"fake@fake.man",
        username: "FakeMan",
        hashedPassword: bcrypt.hashSync("password7")
      },
      {
        email:"theboy@who.lived",
        username: "HarryP",
        hashedPassword: bcrypt.hashSync("password8")
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
