---
Title: Hands-on
PrevPage: 01-intro-handson
NextPage: ../finish
---

#### Crie uma nova aplicação

Dentro do projeto execute um novo app.

```execute
oc-3.11.115 new-app \
    php:7.1~https://github.com/snifbr/s2i-php-container \
    --context-dir=7.1/test/test-app/ \
    --name=%project_namespace%-php-teste
```

2. Adiciona integração com git webhook.

??? note "para adicionar trigger"
    ```
    oc set triggers bc %project_namespace%-php-teste --from-github
    ```

````
oc-3.11.115 get -o yaml bc danilo-labs-php-teste
````

```
echo 'secret123' | base64
```

```
triggers:
  type: "GitHub"
  github:
    secretReference:
      name: "mysecret"
```

```
- kind: Secret
  apiVersion: v1
  metadata:
    name: mysecret
    creationTimestamp:
  data:
    WebHookSecretKey: c2VjcmV0MTIzCg==
```

3. Faz alteração no código, commit e push.

4. Mostra deploy.

```execute
oc-3.11.115 delete all,serviceaccount,rolebinding,configmap \
    -l app=%project_namespace%-php-teste
```
