Hi, this project is running in heroku on: https://young-shelf-08023.herokuapp.com/api/v1/comments  

Node js, express and sequelize as an ORM to manage the database queries were used for this project.
Dev Database is running on docker

To have this project on dev environment:

To get all files and dependencies:
1) git clone git@github.com:onedrako/Comments-App-backend.git
2) npm i 
3) add a .env file
4) On .env file add the next env variables
  PORT=3000
  DATABASE_URL='postgres://user:root@localhost:5432/my_db'
  DB_PASSWORD=root
  DB_HOST=localhost
  DB_NAME=my_db
  DB_PORT=5432
 


To run docker image for database use docker-compose cli
1)  docker-compose up -d postgres  => to up the docker image
2)  npm run migrations:run   => to create the models on the database

If you want to see inside the database on this docker image 
1)  docker-compose exec postgres bash
2)  psql -h localhost -d my_db -U user
And then can use SQL queries

If want to exit:
1) exit
2) exit

Finally run the dev server with
npm run dev

And you have to get the express server on port 3000 with the docker database connected :D

To stop:
ctrl + c => stop express server
docker-compose down => to close docker process




  
