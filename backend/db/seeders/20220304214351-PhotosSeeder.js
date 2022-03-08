'use strict';
const photos = {
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
  16: ["https://a0.muscache.com/im/pictures/ebbb0b16-a1e1-492f-9b06-3f277a790da8.jpg?im_w=1200","https://a0.muscache.com/im/pictures/48567f57-9e9e-4809-856c-b22d79de765a.jpg?im_w=1440","https://a0.muscache.com/im/pictures/e76354c2-8cf9-49bd-b90d-3b2baf53e1ea.jpg?im_w=1440","https://a0.muscache.com/im/pictures/8bb29756-8f83-4ffc-9ba5-ce06cc647d86.jpg?im_w=1440","https://a0.muscache.com/im/pictures/cfa1ffb4-059b-421c-8728-e1a6e191c72d.jpg?im_w=1440"],
  17: ["https://a0.muscache.com/im/pictures/f9840916-a885-4da2-b844-d488136dd4d3.jpg?im_w=1200","https://a0.muscache.com/im/pictures/91148e7f-a3b2-4edd-8783-8efeb912a1c7.jpg?im_w=1440","https://a0.muscache.com/im/pictures/3381469d-61e9-4583-a9ba-7c795b36a039.jpg?im_w=1440","https://a0.muscache.com/im/pictures/46dc93e7-d573-4ac3-9064-45cd8a67a1a0.jpg?im_w=1440","https://a0.muscache.com/im/pictures/0ed582a0-0af7-495c-91ff-9477a3943154.jpg?im_w=1440"],
  18: ["https://a0.muscache.com/im/pictures/8e9f68c0-7b0a-4921-89ea-f5c301ec33aa.jpg?im_w=1200","https://a0.muscache.com/im/pictures/68d5d08d-3049-4e3a-9d86-da4460a3aedc.jpg?im_w=1440","https://a0.muscache.com/im/pictures/ffc155e4-9860-4847-96a7-dc96190d05b6.jpg?im_w=1440","https://a0.muscache.com/im/pictures/e48f5f4c-8dfe-4756-8fda-97197168d5f1.jpg?im_w=1440","https://a0.muscache.com/im/pictures/a11eb427-b722-48b3-be34-a9fd02842fa4.jpg?im_w=1440"],
  19: ["https://a0.muscache.com/im/pictures/233172a6-a1ba-409a-a800-04aa3651fa43.jpg?im_w=1200","https://a0.muscache.com/im/pictures/185822ab-cb17-44bc-b15b-c02007ec4e1e.jpg?im_w=1440","https://a0.muscache.com/im/pictures/7d70ae7b-9436-4066-ad91-4113db94327f.jpg?im_w=1440","https://a0.muscache.com/im/pictures/18c402e7-7a3a-4d28-848a-8b1f2e1620d2.jpg?im_w=1440","https://a0.muscache.com/im/pictures/9033dd21-3faf-485f-b067-1028a4c88f19.jpg?im_w=1440"],
  20: ["https://a0.muscache.com/im/pictures/miso/Hosting-551660531824144913/original/8cc78f53-6019-4af7-a853-5923c9c1fe05.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-551660531824144913/original/d6bf3019-caa6-4949-adf1-cd0e45798953.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-551660531824144913/original/bb5eec76-d109-4314-a297-b4b5283962e3.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-551660531824144913/original/4e9096de-7d54-4d9d-8588-b398120097a1.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-551660531824144913/original/db878a6c-d896-450f-a347-57d2849566f8.jpeg?im_w=1440"],
  21: ["https://a0.muscache.com/im/pictures/6bf98995-5b68-4e6b-b40a-04382da3994a.jpg?im_w=1200","https://a0.muscache.com/im/pictures/e9ef6a90-d699-4ee7-bf9b-92b4c00d384a.jpg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-34066697/original/a7bd83ba-65c6-49f9-915a-3daf57af8521.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/c93ec7eb-fdeb-4317-ba39-ed0828796f4b.jpg?im_w=1440","https://a0.muscache.com/im/pictures/813c5d0f-c773-47f1-89e6-71597669f3f3.jpg?im_w=1440"],
  22: ["https://a0.muscache.com/im/pictures/604f120f-6b12-4d88-8b41-b8aeb82d1613.jpg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-39952962/original/cdb7b226-5771-4ee0-a3c2-9736aee52ac6.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-39952962/original/bc19b769-ee56-4039-9856-a01d3627ae6b.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-39952962/original/ffda59d4-b30c-4c18-8bbb-147cb79adb95.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-39952962/original/7a19fdf2-2196-4238-8fdb-53deda4d35e9.jpeg?im_w=1440"],
  23: ["https://a0.muscache.com/im/pictures/miso/Hosting-52954742/original/a90f0f1a-8432-4f55-b486-e5ce0399f573.jpeg?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-52954742/original/4a827c37-58da-49af-a073-84cdd53be97c.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52954742/original/4734e02b-b700-46ec-8a53-7b55ad975286.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52954742/original/61576e0c-0aab-4d06-8705-cf518d0750f7.jpeg?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52954742/original/21493fe6-01dc-4255-a89c-59876b0d197a.jpeg?im_w=1440"],
  24: ["https://a0.muscache.com/im/pictures/miso/Hosting-52171550/original/7fce2f29-dacd-495b-b3bf-edcd3fdb7951.png?im_w=1200","https://a0.muscache.com/im/pictures/miso/Hosting-52171550/original/a75a0143-8c56-455c-af53-e4aa3b63db06.png?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52171550/original/e7f25b22-e481-458e-91ce-8a8c7953a2d4.png?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52171550/original/eaabaec2-aff4-4b15-b1ae-afabafcb6361.png?im_w=1440","https://a0.muscache.com/im/pictures/miso/Hosting-52171550/original/88b10d1e-a891-4d4f-b47b-5348b4742a6d.png?im_w=1440"],
  25: ["https://a0.muscache.com/im/pictures/263fd3ba-ed4f-405c-8a8a-f2dc815dec15.jpg?im_w=1200","https://a0.muscache.com/im/pictures/215c2b8b-e731-4443-b326-9d97e803243b.jpg?im_w=1440","https://a0.muscache.com/im/pictures/a43c49cf-b5dd-4e1b-810a-c8d86eb8b55b.jpg?im_w=1440","https://a0.muscache.com/im/pictures/8d26ac1d-8906-4224-8418-f896ca8aae05.jpg?im_w=1440","https://a0.muscache.com/im/pictures/080d5528-07a0-43db-8bdb-eb1d9f0bc8f1.jpg?im_w=1440"]

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
