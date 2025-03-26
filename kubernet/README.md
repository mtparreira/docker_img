--[MINIKUBE]---------------------------------------------------------------------------------------

```sh
minikube start --driver=docker

minikube status

minikube ip

minikube ssh

minikube image load imagem:tag

minikube dashboard

minikube stop
```

--[KUBECTL]----------------------------------------------------------------------------------------

```sh
kubectl get pod

kubectl get svc

kubectl get pod -o wide

kubectl describe pod pod-dns

kubectl descrive svc svc-dns

kubectl apply -f arquivo.yaml | pasta

kubectl exec it pod-dns -- bash

kubectl delete pod pod-dns

kubectl delete svc svc-dns
```
