--[DOCKER]-----------------------------------------------------------------------------------------

```sh
sudo docker build -t imgrabbitmq .

sudo docker run -d --name ctrabbitmq -p 5672:5672 -p 15672:15672 --rm imgrabbitmq

sudo docker logs -f ctrabbitmq

sudo docker rm --force ctrabbitmq

sudo docker rmi $(docker images -f "dangling=true" -q)
```
