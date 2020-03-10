-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 10 mars 2020 à 00:15
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `foot`
--

DELIMITER $$
--
-- Procédures
--
DROP PROCEDURE IF EXISTS `championnatAfficher`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `championnatAfficher` ()  BEGIN
select * from championnat;
END$$

DROP PROCEDURE IF EXISTS `championnatAjout`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `championnatAjout` (IN `anner` INT, IN `nom` VARCHAR(40))  BEGIN
insert into championnat values(anner,1,nom);
insert into championnat values(anner,2,nom);
END$$

DROP PROCEDURE IF EXISTS `equipeAfficher`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `equipeAfficher` ()  BEGIN
select * from equipe;
END$$

DROP PROCEDURE IF EXISTS `equipeAjout`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `equipeAjout` (IN `nom` VARCHAR(40), IN `equipe` VARCHAR(40))  BEGIN
 insert into equipe values (nom,equipe);
END$$

DROP PROCEDURE IF EXISTS `equipeDelete`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `equipeDelete` (IN `nom` VARCHAR(40))  BEGIN
 delete from equipe where nomEquipe = nom;
END$$

DROP PROCEDURE IF EXISTS `equipeRefresh`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `equipeRefresh` ()  BEGIN
delete from equipe where nomEquipe is not NULL;

END$$

DROP PROCEDURE IF EXISTS `inscriptionAjout`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `inscriptionAjout` (IN `anner` INT, IN `temps` INT, IN `equipe` VARCHAR(40))  BEGIN
insert into inscription (fkAnner,fkTemps,fkEquipe) values (anner,temps,equipe);
END$$

DROP PROCEDURE IF EXISTS `joueurAfficher`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `joueurAfficher` ()  BEGIN
select * from joueur;
END$$

DROP PROCEDURE IF EXISTS `joueurAjout`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `joueurAjout` (IN `nom` VARCHAR(40), IN `equipe` VARCHAR(40))  BEGIN
insert into joueur (nom,fkEquipe) values (nom,equipe);

END$$

DROP PROCEDURE IF EXISTS `joueurDelete`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `joueurDelete` (IN `nomm` VARCHAR(40))  BEGIN
DELETE FROM joueur where nom=nomm;

END$$

DROP PROCEDURE IF EXISTS `joueurEquipe`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `joueurEquipe` (IN `nom` VARCHAR(40))  BEGIN
select * from joueur where fkEquipe=nom;
END$$

DROP PROCEDURE IF EXISTS `joueurRefresh`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `joueurRefresh` ()  BEGIN
update joueur set fkEquipe = NULL where fkEquipe is not NULL;

END$$

DROP PROCEDURE IF EXISTS `joueurUpdate`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `joueurUpdate` (IN `equipe` VARCHAR(40), IN `nouveau` VARCHAR(40))  BEGIN
update joueur set fkEquipe=equipe where nom = nouveau;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `championnat`
--

DROP TABLE IF EXISTS `championnat`;
CREATE TABLE IF NOT EXISTS `championnat` (
  `anner` int(11) NOT NULL,
  `temps` enum('1','2') NOT NULL,
  `nom` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`anner`,`temps`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
CREATE TABLE IF NOT EXISTS `equipe` (
  `nomEquipe` varchar(50) NOT NULL,
  `pays` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`nomEquipe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipe`
--

INSERT INTO `equipe` (`nomEquipe`, `pays`) VALUES
('barcelone', 'espagne'),
('paris', 'france');

-- --------------------------------------------------------

--
-- Structure de la table `inscription`
--

DROP TABLE IF EXISTS `inscription`;
CREATE TABLE IF NOT EXISTS `inscription` (
  `idInscription` int(11) NOT NULL,
  `fkAnner` int(11) DEFAULT NULL,
  `fkTemps` int(11) DEFAULT NULL,
  `fkEquipe` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`idInscription`),
  KEY `fkAnner` (`fkAnner`),
  KEY `fkTemps` (`fkTemps`),
  KEY `fkEquipe` (`fkEquipe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

DROP TABLE IF EXISTS `joueur`;
CREATE TABLE IF NOT EXISTS `joueur` (
  `nom` varchar(40) NOT NULL,
  `esclusion` int(11) DEFAULT 0,
  `fkEquipe` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nom`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `joueur`
--

INSERT INTO `joueur` (`nom`, `esclusion`, `fkEquipe`) VALUES
('naymar', 0, NULL),
('messi', 0, NULL),
('demain', 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `match`
--

DROP TABLE IF EXISTS `match`;
CREATE TABLE IF NOT EXISTS `match` (
  `idMatch` int(11) NOT NULL AUTO_INCREMENT,
  `fk_idInscription1` int(11) DEFAULT NULL,
  `fk_idInscription2` int(11) DEFAULT NULL,
  `gagnant` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`idMatch`),
  KEY `fk_idInscription1` (`fk_idInscription1`,`fk_idInscription2`,`gagnant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `resultat`
--

DROP TABLE IF EXISTS `resultat`;
CREATE TABLE IF NOT EXISTS `resultat` (
  `fkNomJoueur` varchar(40) DEFAULT NULL,
  `fkId_match` int(11) DEFAULT NULL,
  `rouge` int(11) DEFAULT 0,
  `jaune` int(11) DEFAULT 0,
  `but` int(11) DEFAULT 0,
  KEY `fkNomJoueur` (`fkNomJoueur`),
  KEY `fkId_match` (`fkId_match`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
