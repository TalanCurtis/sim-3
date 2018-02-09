insert into users
(
    auth_id ,
    img ,
    first_name ,
    Last_name ,
    gender ,
    hair_color ,
    eye_color ,
    hobby ,
    birth_day ,
    birth_month ,
    birth_year 
)
values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);
returning *;