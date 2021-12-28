#!/bin/bash
. ${WORKSPACE}/jenkins/${ENVIRONMENT}/env

DEPLOYMENT_FILE=${WORKSPACE}/k8s/deployment.yml
SERVICE_FILE=${WORKSPACE}/k8s/service.yml
sed -i "s/IMAGE_TAG/${BUILD_NUMBER}/g" ${DEPLOYMENT_FILE}
cat  ${DEPLOYMENT_FILE}
kubectl --kubeconfig /data/ms/config/${DEPLOYMENT_ENV_IP} apply -f ${DEPLOYMENT_FILE}
kubectl --kubeconfig /data/ms/config/${DEPLOYMENT_ENV_IP} apply -f ${SERVICE_FILE}
