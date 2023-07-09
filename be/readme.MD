# clone the project and to run locally
# run npm i
# add docker image of pg db sing below command
* docker run --name pg_db_dev -ti -d --restart always  -p 5432:5432 -v pg_db_dev:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e PGUSER=postgres -e PGPASSWORD=postgres -e PGDATABASE=postgres postgres:10
# to start the project
* nodemon src/app.js