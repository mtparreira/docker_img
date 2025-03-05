--[DOCKER]-----------------------------------------------------------------------------------------

```sh
docker build -t imgmongodb .

docker run -d --name ctmogodb -p 27017:27017 --rm imgmongodb

docker exec -it ctmongodb bash

docker logs -f ctmongodb

docker rm --force ctmongodb

docker volume prune -f

docker rmi $(docker images -f "dangling=true" -q)
```

--[MONGOSH]-----------------------------------------------------------------------------------------

```sh
mongosh -u usuario -p Teste1@34 --authenticationDatabase admin

show dbs;

use banco;

show collections;

db.colecao.find();
```
