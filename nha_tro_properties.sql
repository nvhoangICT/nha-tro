-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: nha_tro
-- ------------------------------------------------------
-- Server version	8.0.29
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `properties`
--
DROP TABLE IF EXISTS `properties`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `properties` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `bedroom` int NOT NULL,
  `bathroom` float NOT NULL,
  `yearBuilt` int NOT NULL,
  `price` float NOT NULL,
  `waterPrice` float NOT NULL,
  `electricPrice` float NOT NULL,
  `status` tinyint(1) NOT NULL,
  `description` varchar(255) NOT NULL,
  `districtId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `properties`
--
LOCK TABLES `properties` WRITE;

/*!40000 ALTER TABLE `properties` DISABLE KEYS */
;

INSERT INTO
  `properties`
VALUES
  (
    '0c96f0df-49d0-48f4-904c-b65da1040ed5',
    'Phòng trọ',
    '123 Phố Trung Kính, Trung Hoà',
    '20',
    1,
    1,
    2015,
    4500000,
    30000,
    3500,
    0,
    'Giường tủ , điều hòa , nóng lạnh ,bàn bếp',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '1116ba52-0d7c-49a3-827a-cd2f4aa0d5ed',
    'Nhà nguyên căn',
    '16 Ngõ 298 Tây Sơn, Trung Liệt',
    '60',
    2,
    1,
    2007,
    8500000,
    25000,
    3500,
    0,
    'Căn hộ rộng rãi, có gác xép tăng thêm tối đa diện tích, cửa sổ thông thoáng gió thổi 24/24.',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '15017dce-0b3b-43a7-846b-9871a173e4ea',
    'Nhà nguyên căn',
    '37/83 Đường Nguyễn Khang',
    '55',
    2,
    1,
    2015,
    13000000,
    30000,
    3500,
    0,
    'Phòng đẹp có giường, nóng lạnh, điều hoà, máy giặt, có wifi đầy đủ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '177f7052-89fd-4beb-8f38-52631aec3fe1',
    'Nhà nguyên căn',
    '110 Trần Duy Hưng',
    '15',
    1,
    0.5,
    2010,
    3000000,
    30000,
    3600,
    1,
    'Giường tủ , điều hòa , nóng lạnh ,bàn bếp',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '17c1bfba-5bff-4fac-ae34-b2fd2051f4f9',
    'Phòng trọ',
    '231 Phố Chùa Bộc, Trung Liệt',
    '20',
    1,
    1,
    2007,
    4000000,
    30000,
    3500,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '18b928d3-23a5-41cd-bcb2-7523ae1c87d7',
    'Phòng trọ',
    '112/273 Phố Bạch Mai, Cầu Dền',
    '15',
    1,
    1,
    2010,
    4500000,
    30000,
    3800,
    0,
    'Giường tủ , điều hòa , nóng lạnh ,bàn bếp',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '23f611d4-20e7-4e63-a376-b02d7ae5ce7d',
    'Phòng trọ',
    '236 Hoàng Quốc Việt, Cổ Nhuế 1',
    '25',
    1,
    1,
    2012,
    4000000,
    30000,
    3500,
    0,
    'Phòng đẹp có giường, nóng lạnh, điều hoà, máy giặt, có wifi đầy đủ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '2e6c4451-d5a8-4243-88ae-f503d0235743',
    'Nhà nguyên căn',
    '82 Đường La Thành, Thành Công',
    '62',
    2,
    1,
    2008,
    14000000,
    30000,
    3500,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    9,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '2fd346c8-983f-4bf8-adbe-c54f44f27626',
    'Nhà nguyên căn',
    '321 Hoàng Quốc Việt, Cổ Nhuế 1',
    '20',
    1,
    1,
    2012,
    3500000,
    30000,
    3500,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '301ab3dc-d377-4d5f-ac17-ee0b5165e0df',
    'Phòng trọ',
    'số nhà 31, 83 Đường Nguyễn Khang',
    '20',
    1,
    1,
    2012,
    4500000,
    30000,
    3500,
    0,
    'Riêng chủ, đi lại tự do. Gần chợ và các trường đại học. ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '43cf8204-bf0d-4dac-944c-9d0565462312',
    'Nhà nguyên căn',
    '236 Định Công Thượng, Định Công',
    '20',
    1,
    1,
    2015,
    4500000,
    30000,
    3500,
    0,
    'Căn hộ rộng rãi, có gác xép tăng thêm tối đa diện tích, cửa sổ thông thoáng gió thổi 24/24.',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '479578da-a745-45b3-9290-bf46c7556e91',
    'Phòng trọ',
    '789 Giải Phóng, Giáp Bát',
    '20',
    1,
    1,
    2009,
    4500000,
    30000,
    3800,
    0,
    'Phòng đẹp có giường, nóng lạnh, điều hoà, máy giặt, có wifi đầy đủ',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '4b01e208-be8a-4784-a4ee-76ee4a90994f',
    'Phòng trọ',
    '183 Phố Hoàng Văn Thái, Khương Trung',
    '28',
    1,
    1,
    2015,
    4000000,
    25000,
    3500,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '4e24f2a1-b0e0-4e1b-ac74-0bbe7d8644f0',
    'Phòng trọ',
    '892 Đường La Thành, Thành Công',
    '20',
    1,
    1,
    2010,
    4500000,
    30000,
    4000,
    0,
    'Giờ giấc đi lại tự do',
    9,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '5305e6e8-b9c9-4b90-9ee7-cbf15be47648',
    'Nhà nguyên căn',
    '102 Đường Trường Chinh, Phương Mai',
    '20',
    1,
    1,
    2009,
    4000000,
    30000,
    3800,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '5539a3d2-bc40-47af-bb4a-d9ea01f6879b',
    'Phòng trọ',
    'Số 30 ngõ 139 Nguyễn Ngọc Vũ, Trung Hoà',
    '20',
    1,
    1,
    2013,
    4000000,
    25000,
    4000,
    1,
    'Hiện tại phòng đã có 3 người đều là sinh viên trường HVNH. Đều ngoan, chăm chỉ.',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '56be8a15-fd83-4529-b5e6-683fe9ece0a6',
    'Nhà nguyên căn',
    '325 Phố Kim Ngưu, Thanh Lương',
    '20',
    1,
    1,
    2008,
    4000000,
    30000,
    3500,
    0,
    'Riêng chủ, đi lại tự do. Gần chợ và các trường đại học. ',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '5915acff-8020-4d38-9dd5-73c96aaa4246',
    'Nhà nguyên căn',
    '639 Đường Bạch Đằng, Chương Dương',
    '20',
    1,
    1,
    2010,
    4500000,
    30000,
    4000,
    0,
    'Nhà mặt hồ, full đồ, ban công, điều hoà nóng lạnh, máy giặt chung, sofa, tủ quần áo, chăn ga gối đệm',
    7,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '6ca7e53f-f59d-4353-bdb9-e4e0bfae64a3',
    'Nhà nguyên căn',
    '123 Đường Khương Đình, Hạ Đình',
    '25',
    1,
    1,
    2016,
    4000000,
    25000,
    3600,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '77dc339c-6027-402f-acd0-c20f42fe72fa',
    'Nhà nguyên căn',
    '561 Đường Tam Trinh, Yên Sở',
    '70',
    2,
    1,
    2016,
    15000000,
    25000,
    3700,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    1,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '7cd127ca-c1b2-4578-9971-6bc32f3b355e',
    'Phòng trọ',
    '33 Ngõ 56 Lê Quang Đạo, Phú Đô',
    '20',
    1,
    1,
    2012,
    4000000,
    30000,
    3500,
    0,
    'Nhà mặt hồ, full đồ, ban công, điều hoà nóng lạnh, máy giặt chung, sofa, tủ quần áo, chăn ga gối đệm',
    6,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '9299d996-b55a-48e4-a5d6-62639e28a59e',
    'Nhà nguyên căn',
    '78 Giải Phóng, Giáp Bát',
    '60',
    2,
    1,
    2012,
    13000000,
    30000,
    3500,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '92cc45cc-5a07-4969-888e-245667321d1c',
    'Nhà nguyên căn',
    '458 Đ. Minh Khai, Khu đô thị Times City, Mai Động',
    '20',
    1,
    1,
    2009,
    4500000,
    30000,
    3800,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '95e27278-e558-48ec-b058-ea3edc82edf3',
    'Nhà nguyên căn',
    '15 Phố Trương Công Giai, Dịch Vọng',
    '28',
    1,
    1,
    2010,
    5000000,
    25000,
    3700,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '96f973d0-374e-4d78-ae78-80bdde582c23',
    'Phòng trọ',
    '56 Ngõ 298 Tây Sơn, Trung Liệt',
    '28',
    1,
    1,
    2010,
    4500000,
    25000,
    3700,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '97f19f3b-0a2d-4d27-85e3-eba8f825814b',
    'Nhà nguyên căn',
    'Nhà 18 Ngách 2/16 Tổ 12 Linh Đàm',
    '20',
    1,
    1,
    2010,
    5000000,
    30000,
    3800,
    1,
    'Nhà mặt hồ, full đồ, ban công, điều hoà nóng lạnh, máy giặt chung, sofa, tủ quần áo, chăn ga gối đệm',
    1,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '989eef5e-0025-40eb-b275-bbd4ade3ea85',
    'Nhà nguyên căn',
    '129 Trương Định,',
    '25',
    1,
    1,
    2012,
    4500000,
    25000,
    3500,
    0,
    'Căn hộ rộng rãi, có gác xép tăng thêm tối đa diện tích, cửa sổ thông thoáng gió thổi 24/24.',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '99e81019-5d79-48c0-8919-61266b30be2e',
    'Nhà nguyên căn',
    '46 Nguyễn Huy Tưởng, Thanh Xuân Trung',
    '60',
    2,
    1,
    2009,
    12300000,
    30000,
    4000,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '99edf176-516b-422f-b593-dcfc651e49b3',
    'Nhà nguyên căn',
    '40 Đường Lê Văn Lương, Trung Hòa Nhân Chính, Nhân Chính',
    '20',
    1,
    1,
    2012,
    4500000,
    30000,
    4000,
    0,
    'Căn hộ rộng rãi, có gác xép tăng thêm tối đa diện tích, cửa sổ thông thoáng gió thổi 24/24.',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '9a6382fd-8c44-4bdc-8b73-44bfed462cb6',
    'Phòng trọ',
    '12 Khuất Duy Tiến, Thanh Xuân Trung',
    '20',
    1,
    1,
    2013,
    3500000,
    30000,
    3500,
    0,
    'Căn hộ rộng rãi, có gác xép tăng thêm tối đa diện tích, cửa sổ thông thoáng gió thổi 24/24.',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '9e32afcb-9df9-4537-9787-0363e760224b',
    'Nhà nguyên căn',
    'Số 9a ngõ 89 Quan Nhân',
    '20',
    1,
    1,
    2015,
    4500000,
    25000,
    3500,
    0,
    'Căn hộ rộng rãi, có gác xép tăng thêm tối đa diện tích, cửa sổ thông thoáng gió thổi 24/24.',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '9ee7a0a2-0be4-405d-9b5e-1278e36fc1b6',
    'Nhà nguyên căn',
    'ngõ 850 đường láng',
    '20',
    1,
    0.5,
    2008,
    3500000,
    25000,
    3500,
    1,
    'Riêng chủ, đi lại tự do. Gần chợ và các trường đại học. ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    '9fa6c21c-8e8f-46e4-bbdf-d066fab12630',
    'Nhà nguyên căn',
    '143 Phố Trung Kính, Trung Hoà',
    '60',
    2,
    1,
    2010,
    12000000,
    25000,
    3600,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'ad1b9da0-40da-4d06-87ca-ee71468f6534',
    'Nhà nguyên căn',
    '86 Phố Thái Thịnh, Ngã Tư Sở',
    '50',
    2,
    1,
    2010,
    9000000,
    25000,
    3500,
    0,
    'Riêng chủ, đi lại tự do. Gần chợ và các trường đại học. ',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b15f336d-a962-44e8-97ac-de9c393f9a81',
    'Phòng trọ',
    '16/150 chùa láng, láng thượng',
    '15',
    1,
    0.5,
    2008,
    2200000,
    20000,
    3500,
    1,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b38284b9-930d-4eb1-bbc8-a516b8ab4afd',
    'Phòng trọ',
    'Hanoi Clinic, Phố Hai Bà Trưng, Trần Hưng Đạo',
    '20',
    1,
    1,
    2008,
    5000000,
    25000,
    3500,
    0,
    'Giờ giấc đi lại tự do',
    7,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b3db4685-03d1-4f92-bc2c-e8da3c9b845c',
    'Phòng trọ',
    '236 Đường Khương Đình, Hạ Đình',
    '20',
    1,
    1,
    2010,
    4500000,
    30000,
    3600,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b607d3a3-af89-4225-8642-3557177a002d',
    'Nhà nguyên căn',
    'số nhà 31, 83 Đường Nguyễn Khang',
    '25',
    1,
    1,
    2016,
    4000000,
    25000,
    3600,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b6523fd1-e7c3-440d-8056-272b28824e64',
    'Nhà nguyên căn',
    '796 Trương Định, Giáp Nhị, Thịnh Liệt',
    '58',
    2,
    1,
    2012,
    13000000,
    25000,
    3500,
    0,
    'Giờ giấc đi lại tự do',
    1,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b67e83a4-12cb-45c0-9e67-c6f42253c41c',
    'Phòng trọ',
    '48 Đường Lê Văn Lương, Trung Hòa Nhân Chính, Nhân Chính',
    '25',
    1,
    1,
    2016,
    4500000,
    25000,
    4000,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'b725ad5e-795c-4453-93a0-376d1c221096',
    'Nhà nguyên căn',
    '896 Trương Định, Giáp Nhị, Thịnh Liệt',
    '28',
    1,
    1,
    2010,
    5000000,
    25000,
    3700,
    0,
    'Nhà mặt hồ, full đồ, ban công, điều hoà nóng lạnh, máy giặt chung, sofa, tủ quần áo, chăn ga gối đệm',
    1,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'bb410f9b-282b-49bc-823e-ef8631ec191e',
    'Nhà nguyên căn',
    '48 Phố Minh Khai, Khu đô thị Times City, Vĩnh Tuy',
    '65',
    2,
    1,
    2010,
    11500000,
    30000,
    3800,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'c3ddb7d4-147d-45bf-8913-5d38ca382d74',
    'Nhà nguyên căn',
    'Hanoi Clinic, Phố Hai Bà Trưng, Trần Hưng Đạo',
    '25',
    1,
    1,
    2012,
    4500000,
    25000,
    3500,
    0,
    'Phòng đẹp có giường, nóng lạnh, điều hoà, máy giặt, có wifi đầy đủ',
    7,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'c4ab7453-b26d-458d-9130-03dd792a034a',
    'Nhà nguyên căn',
    'NGÕ 21 QUAN HOA',
    '28',
    1,
    1,
    2012,
    5800000,
    30000,
    3500,
    1,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'cca68d3e-5a53-4133-9e2d-4d5f995cae03',
    'Phòng trọ',
    '10 Phố Trương Công Giai, Dịch Vọng',
    '20',
    1,
    1,
    2009,
    3500000,
    30000,
    3700,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'cfdaedb9-919d-4247-a4d3-54c271bb928d',
    'Nhà nguyên căn',
    '145 Định Công Thượng, Định Công',
    '25',
    1,
    1,
    2012,
    4500000,
    30000,
    3500,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'd1682a25-65db-40c8-ad05-ecea8f78521a',
    'Phòng trọ',
    '96 Nguyễn Huy Tưởng, Thanh Xuân Trung',
    '20',
    1,
    1,
    2008,
    4000000,
    30000,
    3500,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'd27f61c8-1184-4837-b6fb-0df0a3156253',
    'Nhà nguyên căn',
    '131 Phố Chùa Bộc, Trung Liệt',
    '60',
    2,
    1,
    2008,
    10000000,
    30000,
    3800,
    0,
    'Nhà mặt hồ, full đồ, ban công, điều hoà nóng lạnh, máy giặt chung, sofa, tủ quần áo, chăn ga gối đệm',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'd31f1bed-1e8c-4718-bc27-506cf09301fb',
    'Phòng trọ',
    '33 Ngõ 56 Lê Quang Đạo',
    '25',
    1,
    1,
    2012,
    4000000,
    30000,
    3800,
    1,
    'Gường, tủ, điều hòa, nóng lạnh, vệ sinh khép kín',
    5,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'd9bdf12f-e1be-49b7-b518-5f1268316e91',
    'Nhà nguyên căn',
    '113 Ngõ 273 Phố Bạch Mai, Cầu Dền',
    '20',
    1,
    1,
    2009,
    4000000,
    30000,
    3800,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'dcbaf385-e977-4247-a9c3-1c41e6dc76f9',
    'Nhà nguyên căn',
    '189 Phố Hoàng Văn Thái, Khương Trung',
    '20',
    1,
    1,
    2008,
    4500000,
    25000,
    3500,
    0,
    'Nhà mặt hồ, full đồ, ban công, điều hoà nóng lạnh, máy giặt chung, sofa, tủ quần áo, chăn ga gối đệm',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'e3b32f62-67e0-4bad-a60b-cf5453e40ca6',
    'Phòng trọ',
    'số 16, ngõ 165/49/9 dương quảng hàm',
    '25',
    1,
    1,
    2010,
    3200000,
    25000,
    3500,
    1,
    'Phòng đẹp có giường, nóng lạnh, điều hoà, máy giặt, có wifi đầy đủ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'e4105222-57c2-4e9e-9bfe-6e158f0d4906',
    'Phòng trọ',
    '458 Phố Minh Khai, Khu đô thị Times City, Vĩnh Tuy',
    '25',
    1,
    1,
    2012,
    4500000,
    25000,
    3500,
    0,
    'Điều hoà, nóng lạnh, tủ lạnh, bàn phấn, kệ bếp,bếp, sofa, giường, tủ quần áo',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'e57afa14-5d03-4e43-8294-9efd9be04232',
    'Nhà nguyên căn',
    '89 Đường Lĩnh Nam, Mai Động',
    '20',
    1,
    1,
    2008,
    4500000,
    25000,
    3500,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    4,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'e68f4f01-065e-4b17-a1d5-d56dea4f6fd5',
    'Phòng trọ',
    'ngõ 76 phố chùa Hà ',
    '20',
    1,
    0.5,
    2007,
    3300000,
    25000,
    3500,
    1,
    'Giờ giấc đi lại tự do',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'e859d0e7-2b5e-4206-ac09-b1e4a6482f4c',
    'Phòng trọ',
    '96 Phố Thái Thịnh, Ngã Tư Sở',
    '25',
    1,
    1,
    2008,
    4500000,
    25000,
    3600,
    0,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    3,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'e8e6480b-97f0-4708-8411-bb2126feaf93',
    'Nhà nguyên căn',
    'Chợ Làng HH Linh Đàm, Nguyễn Hữu Thọ, Hoàng Mai',
    '20',
    1,
    1,
    2016,
    4000000,
    25000,
    4000,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    1,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'eef27d26-0202-4151-b5e8-e27f2acc492f',
    'Nhà nguyên căn',
    'Ngõ 93 TRUNG KÍNH',
    '25',
    1,
    1,
    2009,
    4000000,
    30000,
    3700,
    1,
    'Môi trường yên tĩnh , thoải mái , giờ giấc thoải mái, không chung chủ',
    2,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'f16844b7-ca4a-4d24-bb85-1d39c7d28bad',
    'Nhà nguyên căn',
    '961 Đường Tam Trinh, Yên Sở',
    '20',
    1,
    1,
    2012,
    3500000,
    30000,
    3500,
    0,
    'Riêng chủ, đi lại tự do. Gần chợ và các trường đại học. ',
    1,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  ),
(
    'fbe4cc4a-7be2-4f19-ba08-d99bc741db5e',
    'Phòng trọ',
    '235 Đường Nguyễn Trãi, Thượng Đình',
    '20',
    1,
    1,
    2010,
    5000000,
    30000,
    3500,
    0,
    'đủ điều hoà , nóng lạnh , vskk , nấu ăn trong phòng , ( phòng mình đã mua đủ đồ chỉ cần đến ở ) có chỗ để xe ',
    8,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  );

/*!40000 ALTER TABLE `properties` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2022-08-03 14:36:35