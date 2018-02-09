create table if not exists users (
    id serial primary key,
    auth_id text,
    img text,
    first_name varchar(20),
    Last_name varchar(20),
    gender varchar(10),
    hair_color varchar(20),
    eye_color varchar(20),
    hobby varchar(20),
    birth_day integer,
    birth_month integer,
    birth_year integer
);