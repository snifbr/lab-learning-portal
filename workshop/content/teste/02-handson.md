---
Title: Hands-on
PrevPage: 01-intro-handson
NextPage: ../finish
---

Vamos instanciar uma simples aplicação PHP.

#### Login

Efetue login no openshift:

```copy
oc login
```

#### Crie uma nova aplicação

Dentro do projeto execute um novo app.

```copy
oc new-app php:7.1~https://github.com/sclorg/s2i-php-container.git --context-dir=7.1/test/test-app/ --name=danilo-php-teste
```
