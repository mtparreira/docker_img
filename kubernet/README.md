--[INSTALL]----------------------------------------------------------------------------------------
```sh
curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube

rm minikube-linux-amd64

curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

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
