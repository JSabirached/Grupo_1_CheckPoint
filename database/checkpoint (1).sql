-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: checkpoint
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `buy`
--

DROP TABLE IF EXISTS `buy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buy` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fecha_Compra` date NOT NULL,
  `fecha_Entrega` date NOT NULL,
  `horario_Entrega` datetime NOT NULL,
  `total` varchar(10) DEFAULT NULL,
  `Factura_idUser` varchar(45) DEFAULT NULL,
  `Factura_idFood` varchar(45) DEFAULT NULL,
  `updated_at TIMESTAMP` datetime DEFAULT NULL,
  `created_at TIMESTAMP` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buy`
--

LOCK TABLES `buy` WRITE;
/*!40000 ALTER TABLE `buy` DISABLE KEYS */;
/*!40000 ALTER TABLE `buy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'bebidas'),(2,'postres'),(3,'hamburguesas'),(4,'pizzaEmpa');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `price` varchar(6) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(180) NOT NULL,
  `created_at TIMESTAMP` datetime DEFAULT NULL,
  `updated_at TIMESTAMP` datetime DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_food_category_idx` (`id_category`),
  CONSTRAINT `fk_food_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Fernet','1200','image-1618187381888.jfif','Jarron lts',NULL,NULL,1),(2,'Vino','250','image-1618184442368.jfif','cosecha Mendoza1865',NULL,NULL,1),(3,'Brownie','280','image-1618184330647.jpg','Chocolate Suizo',NULL,NULL,2),(4,'Helado2bocha','300','image-1618184485191.jpg','Recorrido de Chocolate',NULL,NULL,2),(5,'DobleQueso','250','image-1618184524113.jpg','Doble con Queso y Papas',NULL,NULL,3),(6,'Completa','230','image-1618184555318.jpg','Jamon Queso Huevo  Tomate Lechuga',NULL,NULL,3),(7,'Pizza Anchoa','300','image-1618184779659.jfif','Pizza con anchoa de la mejor seleccion',NULL,NULL,4),(8,'Muzzarella','290','image-1618184847766.jpg','Muzza con extraa Queso!!',NULL,NULL,4),(9,'KamgreBurguer','200','image-1618183276061.jfif','Traída desde el fondo de Mar',NULL,NULL,3),(12,'Campari','400','image-1618181830721.jpg','Infusión de Hierbas ',NULL,NULL,1),(13,'Margarita','260','image-1618181966571.jfif',' tequila y jugo de lima ',NULL,NULL,1),(14,'Mojito','280','image-1618182102671.jfif','Originario de Cuba,',NULL,NULL,1),(15,'Mai Tai','300','image-1618182632296.jfif',' cóctel a base de ron',NULL,NULL,1),(16,'Caipirinha','310','image-1618182301385.jfif',' bebida brasileña ',NULL,NULL,1),(17,'Long Island','350','image-1618182714345.jfif','\"El Clasico Te Ingles\"',NULL,NULL,1),(18,'Especial','430','image-1618182902400.jfif','Jamon Queso huevo Cheddar y Cebolla',NULL,NULL,3),(19,'TripleCompleta','650','image-1618183173927.jfif','Tres Capas de Carne  ,Queso, Lechuga ',NULL,NULL,3),(21,'Clasica Baccon','280','image-1618183605230.jfif','Queso Peppino Cheddar Baccon',NULL,NULL,3),(22,'Mejicana','330','image-1618183782836.jpg','preparada con los mejores picantes',NULL,NULL,3),(23,'Chivito','800','image-1618183945104.jfif','tradicional Chivito Completo',NULL,NULL,3),(24,'Fruto Bosques','430','image-1618184270773.jfif','postre individual',NULL,NULL,2),(25,'Strudell','530','image-1618184961974.jpg','Echo con Manzana',NULL,NULL,2),(26,'dolche','340','image-1618185129174.jpg','Echo con Calabaza',NULL,NULL,2),(27,'Helado','700','image-1618185184032.jpg','Artezanal',NULL,NULL,2),(28,'Budin','350','image-1618185236259.jpg','Chocolate',NULL,NULL,2),(29,'Flan','350','image-1618185331158.jfif','Casero ',NULL,NULL,2),(30,'Mix16','1400','image-1618185451043.jpg',' Empanadas Car,Ver y Pollo',NULL,NULL,4),(31,'Colombiana','1200','image-1618185511030.png','Palmito y  Tomate  casera',NULL,NULL,4),(32,'Vegana','600','image-1618185575976.jpg','Mix verduras',NULL,NULL,4),(33,'Combo-3','1300','image-1618185934857.jpg','1Napo 6pollo',NULL,NULL,4),(34,'las 12','800','image-1618186072189.jfif','Docena de Carne y Pollo',NULL,NULL,4),(35,'Peperoni','900','image-1618186203843.jfif','La Clasica Peperoni',NULL,NULL,4),(39,'jsaodi','354','default.png','jbjb',NULL,NULL,1);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `category` int NOT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `localidad` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `updated_at TIMESTAMP` datetime DEFAULT NULL,
  `created_at TIMESTAMP` datetime DEFAULT NULL,
  `surname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'juan','juan@gmail.com','$2b$12$0M9D9.LZHfTtLBNElgri3eSfcU34Z66CjMBjrYTP3.WwJFSg27ewG','default.png',0,'','','','',NULL,NULL,'manuel'),(5,'miguel','miguel@gmail.com','$2b$12$XLAO3boXM790o8DS1mXAD.aW7JpDKe4AfgfgmV/p4y4xpV5x2ZyGS','default.png',0,'','','','',NULL,NULL,'miu'),(6,'lean','lean@gmail.com','$2b$12$db57wfSZb4yXrf7O3Z9Tf.hSWep/V4BemonQoqzirXovdRL8BVWtu','default.png',0,'','','','',NULL,NULL,'marcelo'),(7,'Josue','josueabirached@gmail.com','$2b$12$2DGDiWPY569OZ9KcokgbaOmZiXnrdXHY5feHbcOJNadh9.rDI5hoK','image-1618414624754.jpg',1,'','','','',NULL,NULL,'Abi Rached'),(8,'jona','jona@gmail.com','$2b$12$I7qwU46u9cMvyxa8tOhXC.nWSdxhFlp/J6Tz7eby6bVUckCUJYRtK','default.png',0,'','','','',NULL,NULL,'jona'),(12,'Matias','matiascardillo@gmail.com','$2b$12$1jaieQSAurFqAJjOHhOFbOSjs4wcmuPRzPsZAepQZDMmtpIgQ3iZC','default.png',1,'','','','',NULL,NULL,'Cardillo'),(13,'Ana','anytapatoronas@gmail.com','$2b$12$nQGI0e9gYElhKXfpSE.NPedUqP/j951XqsAtfblLmQ5rhiZ6ZbZJe','img-1618422210586.png',1,'','','','',NULL,NULL,'Rojas');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-14 14:57:18
