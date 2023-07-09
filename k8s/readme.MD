# install minikube
* $brew install minikube
# install kubectl
* $brew install kubectl
# install helm

* $ kubectl apply -f k8s

# goto a different tab and execute below commands
* $ minikube addons enable ingress
* $ minikube ip
# below will open a tunnel and goto localhost after entering the password
* $ minikube tunnel

# to check endpoints
* $ kubectl get ep -n fullstack 

# To check all resources on namespace
* $ kubectl get all -n fullstack

# To check logs of a pod
* $ kubectl logs node-api-7d49d6bdb8-qdk2v -n fullstack

# To describe a pods
* $ kubectl describe pod postgres-7cb44db9d5-2lmkg -n fullstack

# To delete a resource
* $ kubectl delete deployment  postgres -n fullstack

# To see the dashboard
* $ minikube dashboard —url