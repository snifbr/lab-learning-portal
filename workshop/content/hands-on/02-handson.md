---
Title: Hands-on
PrevPage: 01-intro-handson
NextPage: ../finish
---

#### Crie uma nova aplicação

Dentro do projeto execute um novo app.

```execute
oc new-app php:7.1~https://github.com/snifbr/s2i-php-container \
    --context-dir=7.1/test/test-app/ \
    --name=%project_namespace%-php-teste
```

```execute
oc delete all,serviceaccount,rolebinding,configmap -l app=%project_namespace%-php-teste
```
