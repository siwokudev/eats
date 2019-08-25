-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: qtm
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bebida`
--

DROP TABLE IF EXISTS `bebida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bebida` (
  `bebida_id` int(11) NOT NULL AUTO_INCREMENT,
  `bebida` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`bebida_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bebida`
--

LOCK TABLES `bebida` WRITE;
/*!40000 ALTER TABLE `bebida` DISABLE KEYS */;
INSERT INTO `bebida` VALUES (1,'cafe americano'),(2,'cafe barista'),(3,'moka'),(4,'capuchino'),(5,'chocolate'),(6,'chai'),(7,'tisana'),(8,'jugo');
/*!40000 ALTER TABLE `bebida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejemplo`
--

DROP TABLE IF EXISTS `ejemplo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejemplo` (
  `sice_id` int(11) DEFAULT NULL,
  `bebida_id` int(11) DEFAULT NULL,
  `ingrediente_id` int(11) DEFAULT NULL,
  `pedido_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`pedido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejemplo`
--

LOCK TABLES `ejemplo` WRITE;
/*!40000 ALTER TABLE `ejemplo` DISABLE KEYS */;
/*!40000 ALTER TABLE `ejemplo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingrediente`
--

DROP TABLE IF EXISTS `ingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente` (
  `ingrediente_id` int(11) NOT NULL AUTO_INCREMENT,
  `ingrediente` varchar(20) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ingrediente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente`
--

LOCK TABLES `ingrediente` WRITE;
/*!40000 ALTER TABLE `ingrediente` DISABLE KEYS */;
INSERT INTO `ingrediente` VALUES (1,'por defecto','default'),(2,'vainilla','bebida'),(3,'manzana','bebida'),(4,'natural','bebida'),(5,'frutos rojos','bebida'),(6,'dorado amanecer','bebida'),(7,'verde extravaganza','bebida'),(8,'naranja','bebida'),(9,'verde','bebida'),(10,'toronja','bebida'),(11,'pavo','comida'),(12,'atun','comida'),(13,'pollo','comida'),(14,'chilorio','comida'),(15,'cebolla','comida'),(16,'aguacate','comida'),(17,'lechuga','comida'),(18,'jitomate','comida'),(19,'cesar','comida'),(20,'panela','comida'),(21,'tocino','comida'),(22,'champiñon','comida'),(23,'peperoni','comida'),(24,'salami','comida');
/*!40000 ALTER TABLE `ingrediente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `producto_id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'pizza'),(2,'paninis'),(3,'baguette'),(4,'cuerno'),(5,'baguel'),(6,'sandwich'),(7,'mollete'),(8,'lonches'),(9,'lasagna'),(10,'ensalada'),(11,'quiche'),(12,'hot-dog'),(13,'quesadilla');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sice`
--

DROP TABLE IF EXISTS `sice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sice` (
  `sice_id` int(11) NOT NULL AUTO_INCREMENT,
  `sice` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`sice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sice`
--

LOCK TABLES `sice` WRITE;
/*!40000 ALTER TABLE `sice` DISABLE KEYS */;
INSERT INTO `sice` VALUES (1,'chico'),(2,'mediano'),(3,'grande');
/*!40000 ALTER TABLE `sice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-29 13:00:39
