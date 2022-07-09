'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "id" : "0b2c5138-7e91-44e5-a4da-0317061cda5b",
        "name" : "Hoang",
        "email" : "h1@g.e",
        "password" : "$2a$10$oksJevCSQ7GbZstd2EI6W.HGWPK/LLfbK9Y0NkqytZ3tmqVRHN6Z6",
        "role" : 0,
        "createdAt" : "2022-06-28 07:42:41",
        "updatedAt" : "2022-06-28 07:42:41"
      },
      {
        "id" : "138ae741-a29c-4610-b512-68d857f67d32",
        "name" : "Nguyễn Việt Hoàng",
        "email" : "h@gmail.com",
        "password" : "$2a$10$Gr2m.SVs.IB6RLmLwlw8tOmjOqZcC1Hy6qcDIny3MeLrReDJ05cTG",
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
        "id" : "8571e20e-1b5c-42e8-ab14-8e79266ff06d",
        "name" : "Hoang",
        "email" : "h1@g.e",
        "password" : "$2a$10$t.xyj1m3BIqNfS4ShLTKwOjdS4ZQJyAJiL8Kh/S2ZdWbpTHox0zly",
        "role" : 0,
        "createdAt" : "2022-06-28 07:45:03",
        "updatedAt" : "2022-06-28 07:45:03"
      },
      {
        "id" : "8f0edb3d-1bcd-4a3d-82d6-ea25387167a5",
        "name" : "Hoang",
        "email" : "h1@g.b",
        "password" : "$2a$10$0ONWDCZ8ogNWcqNs9aI2oO1nYycmGWpKQ3NQQBuGJ7hS.HPtwQdJ.",
        "role" : 0,
        "createdAt" : "2022-06-28 06:19:49",
        "updatedAt" : "2022-06-28 06:19:49"
      },
      {
        "id" : "961aaeb6-f307-40e6-92ab-4b9d37166121",
        "name" : "Hoang",
        "email" : "h1@g.e",
        "password" : "$2a$10$wGm0WDp4RUAEJONtLFFu4upKSOXLS7G8zJwyWqjSB0WZIQuBup5n.",
        "role" : 0,
        "createdAt" : "2022-06-28 06:32:10",
        "updatedAt" : "2022-06-28 06:32:10"
      },
      {
        "id" : "9e8fb82d-8545-4961-bdbf-ccaa1c508861",
        "name" : "Hoang",
        "email" : "h1@g.a",
        "password" : "$2a$10$0ONWDCZ8ogNWcqNs9aI2oO1nYycmGWpKQ3NQQBuGJ7hS.HPtwQdJ.",
        "role" : 0,
        "createdAt" : "2022-06-28 06:20:00",
        "updatedAt" : "2022-06-28 06:20:00"
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
        "id" : "aafa5f57-809c-47ac-af24-65856779dc64",
        "name" : "Hoang",
        "email" : "h1@g.c",
        "password" : "$2a$10$mjftdjFfHS7HEw9sP0WP4.2KIG7jHHicGLEtoVAvclg7yZ0ZPUBdm",
        "role" : 0,
        "createdAt" : "2022-06-28 06:18:35",
        "updatedAt" : "2022-06-28 06:18:35"
      },
      {
        "id" : "adbe2d3e-f7ad-41c2-a439-62f01f41a035",
        "name" : "Hoang",
        "email" : "h1@g.e",
        "password" : "$2b$10$cnCYNRMs5OypoUJhLseXguaBxR59oINENTf8FRceBkKfu.arJLMjS",
        "role" : 0,
        "createdAt" : "2022-06-28 06:31:05",
        "updatedAt" : "2022-06-28 06:31:05"
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
