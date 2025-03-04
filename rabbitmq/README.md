--[DOCKER]-----------------------------------------------------------------------------------------

```sh
docker build -t imgrabbitmq .

docker run -d --name ctrabbitmq -p 5672:5672 -p 15672:15672 --rm imgrabbitmq

docker logs -f ctrabbitmq

docker rm --force ctrabbitmq

docker volume prune -f

docker rmi $(docker images -f "dangling=true" -q)
```
