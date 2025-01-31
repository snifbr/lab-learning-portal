---
Title: Hands-on
PrevPage: 01-intro-handson
NextPage: ../finish
---

#### Crie uma nova aplicação

Dentro do projeto execute um novo app.

```execute
oc new-app \
    php:7.1~https://github.com/snifbr/s2i-php-container \
    --context-dir=7.1/test/test-app/ \
    --name=%project_namespace%-php-teste
```

2. Adiciona integração com git webhook.

```
oc set triggers bc %project_namespace%-php-teste --from-github
```

````
oc get -o yaml bc danilo-labs-php-teste
````

```
echo 'secret123' | base64
```

```
triggers:
  type: "GitHub"
  github:
    secretReference:
      name: "secret123"
```

```
- kind: Secret
  apiVersion: v1
  metadata:
    name: secret123
    creationTimestamp:
  data:
    WebHookSecretKey: c2VjcmV0MTIzCg==
```

3. Faz alteração no código, commit e push.

4. Mostra deploy.

```execute
oc delete all,serviceaccount,rolebinding,configmap \
    -l app=%project_namespace%-php-teste
```
