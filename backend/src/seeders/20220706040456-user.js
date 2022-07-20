'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "id" : "fcadd1cf-e612-472a-90bf-c7ecfc2236cd",
        "name" : "Vũ Hoàng Tùng",
        "email" : "tung@gmail.com",
        "password" : "$2a$10$37Yyal/wbac/MR2N5L.M0eCK6CCqcI.yOzhFUkU58CEFEZfabBQ4C",
        "role" : 0,
        "createdAt" : "2022-06-28 07:42:41",
        "updatedAt" : "2022-06-28 07:42:41"
      },
      {
        "id" : "138ae741-a29c-4610-b512-68d857f67d32",
        "name" : "Nguyễn Việt Hoàng",
        "email" : "hoang@gmail.com",
        "password" : "$2a$10$miUzebVOzi/NxdKu5V5aUOu9YGf160CzlzwRTMdHxnpP7RAxAeh0.",
        "role" : 0,
        "createdAt" : "2022-06-29 15:27:58",
        "updatedAt" : "2022-06-29 15:27:58"
      },
      {
        "id" : "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "name" : "Nguyễn Việt Hoàng",
        "email" : "admin@gmail.com",
        "password" : "$2a$10$IhonbqZkWqjUR.Pb2f2BUehUMtcPB01yuaEriuR1Dm.sSCfDgCyNe",
        "role" : 0,
        "createdAt" : "2022-06-30 12:26:16",
        "updatedAt" : "2022-06-30 12:26:16"
      },
      {
        "id" : "7221c6f8-dab3-4cd6-be65-014a5d0063cf",
        "name" : "Cuong",
        "email" : "cuong@gmail.com",
        "password" : "$2a$10$9njRf.SAbCUF1amAtVXmY.BqdTEl5y8jGDDvX9C8T/nnP7rvznl/.",
        "role" : 0,
        "createdAt" : "2022-07-06 04:25:25",
        "updatedAt" : "2022-07-06 04:25:25"
      },
      {
        "id" : "a34d6dac-73e3-4734-bb15-d2572c6ff585",
        "name" : "Jane Doe",
        "email" : "jane9@gmail.com",
        "password" : "$2a$10$dN.e6M/qs4DLPczQLdyz5.oJpbNvz.AgmMDNK9Pt8WscU4C5cW0Jm",
        "role" : 0,
        "createdAt" : "2022-06-28 07:47:07",
        "updatedAt" : "2022-06-28 07:47:07"
      },
      {
        "id" : "b4949fb7-0a75-4033-a45d-798b3ce3ca70",
        "name" : "Jane Doe",
        "email" : "jane6@gmail.com",
        "password" : "$2a$10$t.xyj1m3BIqNfS4ShLTKwOev0Q3js96jvICfF7g4NHq/cJL.Gqjm.",
        "role" : 0,
        "createdAt" : "2022-06-28 07:46:44",
        "updatedAt" : "2022-06-28 07:46:44"
      }
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
