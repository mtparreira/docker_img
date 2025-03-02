--[DOCKER]-----------------------------------------------------------------------------------------

```sh
sudo docker build -t imgmongodb .

sudo docker run -d --name ctmogodb -p 27017:27017 --rm imgmongodb

sudo docker exec -it ctmongodb bash

sudo docker logs -f ctmongodb

sudo docker rm --force ctmongodb

sudo docker rmi $(docker images -f "dangling=true" -q)
```

--[MONGOSH]-----------------------------------------------------------------------------------------

```sh
mongosh -u usuario -p Teste1@34 --authenticationDatabase admin

show dbs;

use banco;

show collections;

db.colecao.find();
```
