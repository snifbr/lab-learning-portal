---
Title: Introdução Hands-on
PrevPage: ../setup
NextPage: 02-learning-portal
---

Esse é uma demonstração de uso do lab-learning-portal.

* https://github.com/snifbr/lab-learning-portal

It supports a number of different configurations or modes in which it can be deployed. These are:

* `hosted-workshop` - Used to run a supervised workshop where each user is provided with separate login credentials for an existing user of the OpenShift cluster in which the workshop is being run, in order to login. Users can perform any action in the cluster that the OpenShift user can do, including being able to create multiple projects, if the cluster user quota configuration permits it.
* `learning-portal` - Used for a more permanent interactive learning environment where users are anonymous and may do a workshop at any time. Users are given temporary access as a service account user, with a single temporary project. When a workshop is completed, or allowed time expires, the service account and project are automatically deleted.
* `user-workspace` - Similar to the learning portal, but users need to login through Keycloak. Users are given access as a service account user, with a single project. The service account and project are dedicated to the user and will still be present if the user were to leave and come back at a future time. This provides a place where users can do ongoing work, but without needing to allocate users in OpenShift itself.
* `jumpbox-server` - Users login through Keycloak. Their instance, possibly only a terminal rather than full workshop environment, runs in the OpenShift cluster, but they have no access to the cluster itself to do anything. The terminal would be used to access a separate system.

In this workshop, you will learn about the `learning-portal` configuration.
