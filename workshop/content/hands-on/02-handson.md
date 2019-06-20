---
Title: Hands-on
PrevPage: 01-intro-handson
NextPage: ../finish
---

#### Crie uma nova aplicação

Dentro do projeto execute um novo app.

```copy
oc new-app php:7.1~https://github.com/snifbr/s2i-php-container \
    --context-dir=7.1/test/test-app/ \
    --name=%project_namespace%-php-teste
```
