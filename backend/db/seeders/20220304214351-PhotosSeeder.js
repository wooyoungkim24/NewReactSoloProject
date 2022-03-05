'use strict';
photos = {
  1: ["https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/a51c64d6-5ea2-479a-a854-c7db981290d1.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/5b168572-d72a-4e52-8183-7ddf7cf5e486.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/d0f06c5f-3e3d-45bc-b9a9-b8d233f45774.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/a5e83920-fa03-4c08-a292-d4eca4adc45c.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-45729644/original/a2e88b34-b638-4520-80cd-7756e024fbc4.jpeg?im_w=1440"],
  2: ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/5a92fb75-0bbc-4fb4-a412-529221cc14a5.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/76ddefea-11cb-4b37-b1cd-b2016c80e831.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/9fdaf0f0-2b77-4d4a-8deb-c37081c9ea2b.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/8afe7aff-e292-4f14-8688-3bd3b666488f.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-52570569/original/66fac2db-fc7b-4e7f-ad0b-0864582f5544.jpeg?im_w=1440"],
  3: ["https://a0.muscache.com/im/pictures/34b0c62a-dea6-4644-bd29-c586ed866a2f.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/dc184841-4889-4960-87c6-589e52a31b7a.jpg?im_w=1440","https://a0.muscache.com/im/pictures/5fec9751-abf2-4b12-b339-f265a21b5919.jpg?im_w=1440","https://a0.muscache.com/im/pictures/ff29b02f-99f2-4e1d-b0fe-13d8a5422a40.jpg?im_w=1440","https://a0.muscache.com/im/pictures/45c919fb-804f-422f-9e72-2b0396d52b68.jpg?im_w=1440"],
  4: ["https://a0.muscache.com/im/pictures/2332a001-c4d6-4d7e-8460-208303bb7c02.jpg?im_w=1200","https://a0.muscache.com/im/pictures/b2e455ef-77ac-45ea-b744-a8acbf023b71.jpg?im_w=1440","https://a0.muscache.com/im/pictures/33ead784-3439-4843-b52e-b81afbe303a0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/d8868984-a83a-4073-8ce7-75267b8f7531.jpg?im_w=1440","https://a0.muscache.com/im/pictures/d7f92dd1-017a-4437-8f17-a3756c258ccf.jpg?im_w=1440"],
  5: ["https://a0.muscache.com/im/pictures/2e1238fd-4aaf-4f4e-920f-d1e97875bc8d.jpg?im_w=1440","https://a0.muscache.com/im/pictures/dbda71e9-d8b3-4144-b663-d38cce3c33b1.jpg?im_w=1440","https://a0.muscache.com/im/pictures/68ab6ade-1b76-4398-986f-73882cdb8ad0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/853eb2da-e3a3-46bd-94a7-77f9e00f20a3.jpg?im_w=1440","https://a0.muscache.com/im/pictures/858cfbd9-56e2-460a-9364-b1d4bf747e30.jpg?im_w=1440"],
  6: ["https://a0.muscache.com/im/pictures/c4d70a52-3695-4895-81ba-4169dd585440.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/d34420b7-6999-4f78-b787-927788f27bdf.jpg?im_w=1440", "https://a0.muscache.com/im/pictures/fa0a1b97-7941-479f-ae72-f1001219bf98.jpg?im_w=1440", "https://a0.muscache.com/im/pictures/ea86f5d6-91fb-415c-98b0-ea7f6fedfba0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/9fa34057-efc6-4303-842e-2dd43d765d49.jpg?im_w=1440"],
  7: ["https://a0.muscache.com/im/pictures/ad1aad4c-17e9-4751-80bb-1bc51b4d8e52.jpg?im_w=1200","https://a0.muscache.com/im/pictures/25c149bf-7ee4-4087-ad63-9e2eceb3b45c.jpg?im_w=1440","https://a0.muscache.com/im/pictures/9a78ac5a-d184-4341-ba5e-a344005faab3.jpg?im_w=1440","https://a0.muscache.com/im/pictures/12da32dc-41fa-4ec3-af17-7f4268ae897f.jpg?im_w=1440","https://a0.muscache.com/im/pictures/f1627f8c-b5c9-4646-bd6e-1c340b231ef1.jpg?im_w=1440"],
  8: ["https://a0.muscache.com/im/pictures/miso/Hosting-54343837/original/ad2e5c99-2c25-4b35-b268-d1de52b35158.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-54343837/original/cc850824-4418-4353-a83d-8b12f48f0f97.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-54343837/original/50680383-a4ef-40a3-a47d-110604cf0df4.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-54343837/original/b8bce5c7-49f9-4acb-8f01-fef534b5e2ce.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-54343837/original/3b7517fa-3c81-428f-ba2a-980841aa2d87.jpeg?im_w=1440"],
  9: ["https://a0.muscache.com/im/pictures/73b3527e-589b-4f8c-9a2d-bfc4cf7c496c.jpg?im_w=1200","https://a0.muscache.com/im/pictures/c6a6cf6e-ac5a-4c92-844e-336e9dd58572.jpg?im_w=1440","https://a0.muscache.com/im/pictures/2f14523b-c811-4059-93a9-198c0c116f09.jpg?im_w=1440","https://a0.muscache.com/im/pictures/96ff1de6-3746-498b-baba-52ebb3cd3104.jpg?im_w=1440","https://a0.muscache.com/im/pictures/1f3d816d-eea5-4a7c-9693-652201c39b07.jpg?im_w=1440"],
  10: ["https://a0.muscache.com/im/pictures/8749d4ec-f20c-4761-bb3e-521f77aa1511.jpg?im_w=1200","https://a0.muscache.com/im/pictures/d98638db-e3bd-4d5d-8e48-6ef7c49bb0ef.jpg?im_w=1440","https://a0.muscache.com/im/pictures/d151f0a1-f851-42bf-9f1e-bedba4ba9d5f.jpg?im_w=1440","https://a0.muscache.com/im/pictures/1c8b04a0-f8d4-445e-b4c3-e456d6248f52.jpg?im_w=1440","https://a0.muscache.com/im/pictures/6be924b6-e3e2-4503-bd06-db5c441b0645.jpg?im_w=1440"],
  11: ["https://a0.muscache.com/im/pictures/miso/Hosting-52087589/original/d45ca207-41b7-4953-8fb4-54859a1c2056.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-52087589/original/537d186d-a8a0-4107-82d9-c857ad2f0c38.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52087589/original/a38088ea-6424-4f74-a1b0-ed3d1df6dc86.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52087589/original/c1be937a-ef38-4936-8c99-5f0d05779429.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52087269/original/555f75f5-a15c-4a56-b71d-ea4ffe7a1212.jpeg?im_w=1440"],
  12: ["https://a0.muscache.com/im/pictures/068ae6da-7541-452d-8ad8-49b4a2d405f6.jpg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-573565565366739108/original/64fbcaaa-89a4-4a91-971d-763bc5b2d8f7.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-573565565366739108/original/c4820a6d-12ab-4eac-81db-648168836abc.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/b1ce97b4-e336-4dfa-99b7-88ea17606940.jpg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-573565565366739108/original/ee7c099f-038a-442b-b795-dedf35f6cb20.jpeg?im_w=1440"],
  13: ["https://a0.muscache.com/im/pictures/miso/Hosting-48888385/original/554a961f-c70b-4064-8456-e42e6414b79e.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-48888385/original/e492d051-14f6-49db-9882-ee841338cdf6.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-48888385/original/9c8e2b26-89f6-4250-adb9-fea5b7f38fcf.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-48888385/original/b95292cb-44bb-425e-8677-678466fadd0c.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-48888385/original/9ba0b243-bb66-477d-b9f4-233b19d8828e.jpeg?im_w=1440"],
  14: ["https://a0.muscache.com/im/pictures/miso/Hosting-558629035682361672/original/2679e30e-dc0e-4be8-bd62-55a6e330cddc.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/prohost-api/Hosting-558629035682361672/original/40411403-cf43-4a9d-827a-a6edde5ec7d9.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-558629035682361672/original/96a4622b-7f0b-441e-85c5-2e55d2556289.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/prohost-api/Hosting-558629035682361672/original/8ba1bf0e-f19f-477e-b7bd-d4784a695170.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-558629035682361672/original/e12e69d5-38f6-427d-94b4-647763af34f7.jpeg?im_w=1440"],
  15: ["https://a0.muscache.com/im/pictures/b7a3fca7-e4b8-43ea-a275-28bc0875b40c.jpg?im_w=1200","https://a0.muscache.com/im/pictures/ac45fb11-7c9f-427d-8034-badd4cae0fc4.jpg?im_w=1440","https://a0.muscache.com/im/pictures/ed355d3e-c453-4aa3-957f-345a5aeb96b0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/3292d51d-af8a-45bc-b21c-f4a4f376d32b.jpg?im_w=1440","https://a0.muscache.com/im/pictures/97a41094-d305-4018-8f18-a2fa8d88593a.jpg?im_w=1440"],
  
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
