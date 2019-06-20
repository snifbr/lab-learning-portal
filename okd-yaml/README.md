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
oc start-build
```

```bash
oc new-app https://raw.githubusercontent.com/openshift-labs/workshop-dashboard/master/templates/production.json \
  --param TERMINAL_IMAGE="danilo-labs/lab-learning-portal" \
  --param APPLICATION_NAME=lab-learning-portal
```
