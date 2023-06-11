-- create database livsiggendb;
use livsiggendb;
drop table if exists signaler;
drop table if exists racePoint;
drop table if exists race;
drop table if exists evenement;

create table race (
	id char(10) not null,
	name varchar(150) not null,
	description varchar(10000),
    color varchar(20),
	constraint pk_race primary key (id)
);

use livsiggendb;
INSERT INTO race (id, name, description, color) VALUES('a0c1e2g3i4', 'Course 10km', 'Chronométrée',  '#0331DC'), ('abcdefghij', 'Course 6km', 'Non chronométrée',  '#DC3803');

create table racePoint (
	id bigint not null,
	raceId char(10) not null,
	latitude varchar(100) not null,
	longitude varchar(100) not null,
	constraint pk_racePoint primary key (id),
	constraint fk_racePoint_race foreign key (raceId) references race(id) on delete cascade
);
INSERT INTO RacePoint (id,raceId,latitude,longitude)
VALUES (1658054553345,'a0c1e2g3i4','49','2');
INSERT INTO RacePoint (id,raceId,latitude,longitude)
VALUES (1658054553346,'a0c1e2g3i4','49.1','2.1');

create table signaler(
  id char(10) not null,
  referent char(10),
  previousSignaler char(10),
  nextSignaler char(10),
  lastName varchar(255) not null,
  firstName varchar(255) not null,
  phone varchar(15) not null,
  mail varchar(255) not null,
  drivingLicence boolean not null,
  latitude varchar(100),
  longitude varchar(100),
  localisation varchar(10000),
  constraint pk_signaler primary key (id),
  constraint fk_signaler_signalerReferent foreign key (referent) references signaler (id) ON DELETE SET NULL,
  constraint fk_signaler_signalerPrevious foreign key (previousSignaler) references signaler (id) ON DELETE SET NULL,
  constraint fk_signaler_signalerNext foreign key (nextSignaler) references signaler (id )ON DELETE SET NULL
); 

insert into signaler (id, lastName, firstName, phone, mail, drivingLicence) values ('01az02er03', 'Durand', 'Paul', '0678912345', 'paul.durand@gmail.com', true);
insert into signaler (id, referent, lastName, firstName, phone, mail, drivingLicence) values ('10az20er30', '01az02er03', 'Durand', 'Pierre', '0678912345', 'pierre.durand@gmail.com', false);

create table evenement(
  id int not null,
  eventLabel varchar(1000),
  dateLabel varchar(1000),
  bikeLabel varchar(1000),
  issueLabel varchar(10000),
  constraint pk_evenement primary key (id)
);

insert into evenement values(1, 'Virade de l''espoir de Cergy-Pontoise', 'Samedi 24 septembre 2022', 'RaphaÃ«l Ferreira 06.85.54.28.02', 'HÃ©lÃ¨ne THIBAULT, responsable de la mise en place des signaleurs 07.85.58.97.92
 
Sophie SCHRECK, organisatrice de la Virade de l''Espoir de Cergy Pontoise, 06.82.97.22.24' );