create database remotejobs;
create role app login password 'docker-pg-p@ssword1!';
grant all privileges on database remotejobs to app;
