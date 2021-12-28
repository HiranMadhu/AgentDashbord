#!/bin/bash
. ${WORKSPACE}/jenkins/${ENVIRONMENT}/env
DOCKERFILE=${WORKSPACE}/Dockerfile

PROD="production"

if [[ "$ENVIRONMENT" == "$PROD" ]]; then
    BUILD_ENV="prod"
else
    BUILD_ENV="dev"
fi    
sed -i "s/BUILD_ENV/${BUILD_ENV}/g" ${DOCKERFILE}
cat  ${DOCKERFILE}
docker build -t ${SERVICE_NAME} .
    if [ $? -ne 0 ]
	then
		echo "docker build failed"
		exit 1
	fi

docker tag ${SERVICE_NAME} ${DOCKER_REGISTRY}/${SERVICE_NAME}:${BUILD_NUMBER}
docker push ${DOCKER_REGISTRY}/${SERVICE_NAME}:${BUILD_NUMBER}
docker rmi -f ${DOCKER_REGISTRY}/${SERVICE_NAME}:${BUILD_NUMBER}
docker rmi -f ${SERVICE_NAME}
