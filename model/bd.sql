create table championnat(anner int not null,temps enum(1,2),nom varchar(40), primary key (anner,temps));

create table equipe(nomEquipe varchar(50) primary key,pays varchar(40));

create table joueur(nom varchar(40) primary key,esclusion int default 0,fkEquipe varchar(50) default null);

create table inscription(idInscription int primary key, fkAnner int ,foreign key (fkAnner) references championnat(anner) on update cascade on delete set null,fkTemps int, foreign key (fkTemps) references championnat(temps) on update cascade on delete set null,fkEquipe varchar(40), foreign key (fkEquipe) references equipe(nomEquipe) on update cascade on delete set null);
create table `match`(idMatch int primary key auto_increment,fk_idInscription1 int,fk_idInscription2 int,gagnant int ,`date` date ,foreign key (fk_idInscription1,fk_idInscription2,gagnant) REFERENCES inscription(anner,temps) on update cascade on delete set null);

create table resultat (fkNomJoueur varchar(40),foreign key (fkNomJoueur) REFERENCES joueur(nom) on update cascade on delete set null,fkId_match int, foreign key (fkId_match) REFERENCES match(idMatch) on update cascade on delete set null, rouge int default 0, jaune int default 0, but int default 0); 