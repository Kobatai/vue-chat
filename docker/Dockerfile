FROM node:12.5.0-alpine

WORKDIR /app

RUN apk update && \
	npm install && \
    npm install -g npm && \
    npm install -g npm @vue/cli \
    npm install -g create-nuxt-app \
    npm install -g firebase-tools 

RUN apk add --no-cache openjdk8-jre

ENV HOST 0.0.0.0
EXPOSE 3000
