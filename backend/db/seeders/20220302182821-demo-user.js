'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        photo:"https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        photo:"https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
      },
      {
        email:"spidey@spider.man",
        username: "Spidey",
        hashedPassword: bcrypt.hashSync("password4"),
        photo: "https://image.shutterstock.com/image-photo/close-headshot-portrait-picture-smiling-260nw-1733598437.jpg"
      },
      {
        email:"doctor@seuss.com",
        username: "Seuss",
        hashedPassword: bcrypt.hashSync("password5"),
        photo: "https://media.istockphoto.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?k=20&m=1142003972&s=612x612&w=0&h=583slP1jSnOeOvU_-g7XCvFSaGaivDvKQj2KNv34Kr4="
      },
      {
        email:"horton@hears.who",
        username: "Horton",
        hashedPassword: bcrypt.hashSync("password6"),
        photo:"https://healthprofessions.ucf.edu/wp-content/uploads/sites/2/2018/06/Matt-Stock.jpg"
      },
      {
        email:"fake@fake.man",
        username: "FakeMan",
        hashedPassword: bcrypt.hashSync("password7"),
        photo:"https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
      },
      {
        email:"theboy@who.lived",
        username: "HarryP",
        hashedPassword: bcrypt.hashSync("password8"),
        photo:"https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera-sat.jpg?ver=6"
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
