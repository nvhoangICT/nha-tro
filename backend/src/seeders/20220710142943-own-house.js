'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OwnHouses', [
      {
        "id": "0c96f0df-49d0-48f4-904c-b65da1040ed5",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "1116ba52-0d7c-49a3-827a-cd2f4aa0d5ed",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "15017dce-0b3b-43a7-846b-9871a173e4ea",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "177f7052-89fd-4beb-8f38-52631aec3fe1",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "17c1bfba-5bff-4fac-ae34-b2fd2051f4f9",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "18b928d3-23a5-41cd-bcb2-7523ae1c87d7",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "23f611d4-20e7-4e63-a376-b02d7ae5ce7d",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "2e6c4451-d5a8-4243-88ae-f503d0235743",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "2fd346c8-983f-4bf8-adbe-c54f44f27626",
        "ownerId": "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id": "301ab3dc-d377-4d5f-ac17-ee0b5165e0df",
        "ownerId": "7221c6f8-dab3-4cd6-be65-014a5d0063cf",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      }
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OwnHouses');
  }
};