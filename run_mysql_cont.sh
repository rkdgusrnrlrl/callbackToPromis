#!/usr/bin/env bash

if [[ "$(docker ps -a | grep some-mysql 2> /dev/null)" != "" ]]; then
  docker rm -f some-mysql
fi

docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=rkd123 -d -p 3306:3306 mysql