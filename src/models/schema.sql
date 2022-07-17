-- create database livsiggenapi;
use livSigGenApi;
drop table if exists signaler;
drop table if exists racePoint;
drop table if exists race;

create table race (
	id char(10) not null,
	name varchar(150) not null,
	description varchar(10000),
	displayed boolean ,
	constraint pk_race primary key (id)
);
insert into race values ("a0c1e2g3i4", "Course 10km chronométrée", "", true);
insert into race values ("abcdefghij", "Course 6km", "Non chronométrée", true);

create table racePoint (
	id char(10) not null,
	raceId char(10) not null,
	latitude varchar(100) not null,
	longitude varchar(100) not null,
    nb integer not null,
	constraint pk_racePoint primary key (id),
	constraint fk_racePoint_race foreign key (raceId) references race(id)
);
INSERT INTO RacePoint (id,raceId,latitude,longitude, nb)
VALUES ('1331374','a0c1e2g3i4','49','2', 0);
INSERT INTO RacePoint (id,raceId,latitude,longitude, nb)
VALUES ('1331375','a0c1e2g3i4','49.1','2.1', 1);

create table signaler(
  id char(10) not null,
  referent char(10),
  lastName varchar(255) not null,
  firstName varchar(255) not null,
  phone varchar(15) not null,
  mail varchar(255) not null,
  drivingLicence boolean not null,
  latitude varchar(100),
  longitude varchar(100),
  constraint pk_signaler primary key (id),
  constraint fk_signaler_signaler foreign key (referent) references signaler (id)
); 

insert into signaler (id, lastName, firstName, phone, mail, drivingLicence) values ("01az02er03", "Durand", "Paul", "0678912345", "paul.durand@gmail.com", true);
insert into signaler (id, referent, lastName, firstName, phone, mail, drivingLicence) values ("10az20er30", "01az02er03", "Durand", "Paul", "0678912345", "paul.durand@gmail.com", false);