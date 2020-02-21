create table users (
    user_id serial primary key,
    username varchar(100),
    user_password varchar(50)
);

create table post (
    post_id serial primary key,
    user_id int references users(user_id),
    text varchar(250)
);



ALTER TABLE users
ALTER user_password
SET DATA TYPE TEXT;