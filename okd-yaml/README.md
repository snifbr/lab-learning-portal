# README First

```bash
oc new-project danilo-labs
```

```bash
oc create -f imageStream-lab-learning-portal.yaml
```

```bash
oc create -f buildConfig-lab-learning-portal.yaml
```

```bash
oc start-build lab-learning-portal
```

```bash
oc new-app https://raw.githubusercontent.com/snifbr/lab-learning-portal/master/templates/production.json \
  --param TERMINAL_IMAGE="docker-registry.default.svc:5000/danilo-labs/lab-learning-portal:v0.1" \
  --param APPLICATION_NAME=lab-learning-portal \
  --param CONSOLE_VERSION=v3.11.0
```
