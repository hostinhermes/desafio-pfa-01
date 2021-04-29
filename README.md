# DESAFIO PFA DOCKER - 01
docker network create pfa-network


docker run --network pfa-network --name pfa-mysql -v $(pwd)/dbdata:/var/lib/mysql hermeshostin/pfa-mysql

docker run --network pfa-network --name pfa-node hermeshostin/pfa-node

docker run --network pfa-network -p 8080:80 hermeshostin/pfa-nginx


