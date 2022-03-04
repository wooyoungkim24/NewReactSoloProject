'use strict';
photos = {
  1: ["https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/a51c64d6-5ea2-479a-a854-c7db981290d1.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/5b168572-d72a-4e52-8183-7ddf7cf5e486.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/d0f06c5f-3e3d-45bc-b9a9-b8d233f45774.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/a5e83920-fa03-4c08-a292-d4eca4adc45c.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/a2e88b34-b638-4520-80cd-7756e024fbc4.jpeg?im_w=1440"],
  2: ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/5a92fb75-0bbc-4fb4-a412-529221cc14a5.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/76ddefea-11cb-4b37-b1cd-b2016c80e831.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/9fdaf0f0-2b77-4d4a-8deb-c37081c9ea2b.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/8afe7aff-e292-4f14-8688-3bd3b666488f.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/66fac2db-fc7b-4e7f-ad0b-0864582f5544.jpeg?im_w=1440"],
  3: ["https://a0.muscache.com/im/pictures/34b0c62a-dea6-4644-bd29-c586ed866a2f.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/dc184841-4889-4960-87c6-589e52a31b7a.jpg?im_w=1440","https://a0.muscache.com/im/pictures/5fec9751-abf2-4b12-b339-f265a21b5919.jpg?im_w=1440","https://a0.muscache.com/im/pictures/ff29b02f-99f2-4e1d-b0fe-13d8a5422a40.jpg?im_w=1440","https://a0.muscache.com/im/pictures/45c919fb-804f-422f-9e72-2b0396d52b68.jpg?im_w=1440"],
  4: ["https://a0.muscache.com/im/pictures/2332a001-c4d6-4d7e-8460-208303bb7c02.jpg?im_w=1200","https://a0.muscache.com/im/pictures/b2e455ef-77ac-45ea-b744-a8acbf023b71.jpg?im_w=1440","https://a0.muscache.com/im/pictures/33ead784-3439-4843-b52e-b81afbe303a0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/d8868984-a83a-4073-8ce7-75267b8f7531.jpg?im_w=1440","https://a0.muscache.com/im/pictures/d7f92dd1-017a-4437-8f17-a3756c258ccf.jpg?im_w=1440"],
  5: ["https://a0.muscache.com/im/pictures/2e1238fd-4aaf-4f4e-920f-d1e97875bc8d.jpg?im_w=1440","https://a0.muscache.com/im/pictures/dbda71e9-d8b3-4144-b663-d38cce3c33b1.jpg?im_w=1440","https://a0.muscache.com/im/pictures/68ab6ade-1b76-4398-986f-73882cdb8ad0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/853eb2da-e3a3-46bd-94a7-77f9e00f20a3.jpg?im_w=1440","https://a0.muscache.com/im/pictures/858cfbd9-56e2-460a-9364-b1d4bf747e30.jpg?im_w=1440"]
}




module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Photos', [
     {spotId: 1, photoArray:photos[1]},
     {spotId: 2, photoArray:photos[2]},
     {spotId: 3, photoArray:photos[3]},
     {spotId: 4, photoArray:photos[4]},
     {spotId: 5, photoArray:photos[5]},
     {spotId: 6, photoArray:photos[6]},
     {spotId: 7, photoArray:photos[7]},
     {spotId: 8, photoArray:photos[8]},
     {spotId: 9, photoArray:photos[9]},
     {spotId: 10, photoArray:photos[10]},
     {spotId: 11, photoArray:photos[11]},
     {spotId: 12, photoArray:photos[12]},
     {spotId: 13, photoArray:photos[13]},
     {spotId: 14, photoArray:photos[14]},
     {spotId: 15, photoArray:photos[15]},
     {spotId: 16, photoArray:photos[16]},
     {spotId: 17, photoArray:photos[17]},
     {spotId: 18, photoArray:photos[18]},
     {spotId: 19, photoArray:photos[19]},
     {spotId: 20, photoArray:photos[20]},
     {spotId: 21, photoArray:photos[21]},
     {spotId: 22, photoArray:photos[22]},
     {spotId: 23, photoArray:photos[23]},
     {spotId: 24, photoArray:photos[24]},
     {spotId: 25, photoArray:photos[25]},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
