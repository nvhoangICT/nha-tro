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
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;

/*!40000 ALTER TABLE `users` DISABLE KEYS */
;

INSERT INTO
  `users`
VALUES
  (
    '138ae741-a29c-4610-b512-68d857f67d32',
    'Nguyễn Việt Hoàng',
    'hoang@gmail.com',
    '$2a$10$miUzebVOzi/NxdKu5V5aUOu9YGf160CzlzwRTMdHxnpP7RAxAeh0.',
    0,
    '2022-06-29 15:27:58',
    '2022-06-29 15:27:58'
  ),
(
    '4b1f7063-53c6-4438-9420-d46acd1df34e',
    'Nguyễn Việt Hoàng',
    'hoangnvdk1@gmail.com',
    '$2a$10$IhonbqZkWqjUR.Pb2f2BUehUMtcPB01yuaEriuR1Dm.sSCfDgCyNe',
    0,
    '2022-06-30 12:26:16',
    '2022-06-30 12:26:16'
  ),
(
    '7221c6f8-dab3-4cd6-be65-014a5d0063cf',
    'Cuong',
    'cuong@gmail.com',
    '$2a$10$9njRf.SAbCUF1amAtVXmY.BqdTEl5y8jGDDvX9C8T/nnP7rvznl/.',
    0,
    '2022-07-06 04:25:25',
    '2022-07-06 04:25:25'
  ),
(
    'a34d6dac-73e3-4734-bb15-d2572c6ff585',
    'Jane Doe',
    'jane9@gmail.com',
    '$2a$10$dN.e6M/qs4DLPczQLdyz5.oJpbNvz.AgmMDNK9Pt8WscU4C5cW0Jm',
    0,
    '2022-06-28 07:47:07',
    '2022-06-28 07:47:07'
  ),
(
    'b4949fb7-0a75-4033-a45d-798b3ce3ca70',
    'Jane Doe',
    'jane6@gmail.com',
    '$2a$10$t.xyj1m3BIqNfS4ShLTKwOev0Q3js96jvICfF7g4NHq/cJL.Gqjm.',
    0,
    '2022-06-28 07:46:44',
    '2022-06-28 07:46:44'
  ),
(
    'fcadd1cf-e612-472a-90bf-c7ecfc2236cd',
    'Vũ Hoàng Tùng',
    'tung@gmail.com',
    '$2a$10$37Yyal/wbac/MR2N5L.M0eCK6CCqcI.yOzhFUkU58CEFEZfabBQ4C',
    0,
    '2022-06-28 07:42:41',
    '2022-06-28 07:42:41'
  );

/*!40000 ALTER TABLE `users` ENABLE KEYS */
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