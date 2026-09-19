# base image
FROM mysql:8.4
# add environmental variables
# database name
ENV MYSQL_DATABASE mean
# db password
ENV MYSQL_ROOT_PASSWORD=password
# initialize db
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
