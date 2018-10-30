FROM docker.frogfather.sas.jfrog.internal/node:10-alpine 
 
LABEL maintainer="yannc@jfrog.com"

ARG ARTY_URL="http://frogfather.sas.jfrog.internal/artifactory"
ARG REGISTRY_URL="http://frogfather.sas.jfrog.internal/artifactory/api/npm/npm-prod/"
ARG BUILD_NUM

RUN apk update && \
    apk upgrade && \
    apk add git

RUN git clone https://github.com/cyan21/FrontApp-JS.git   
WORKDIR  FrontApp-JS

# install JFrog CLI
# TO DO : use "curl -fL https://getcli.jfrog.io | sh" instead
COPY jfrog /usr/local/bin/

RUN jfrog rt c arty --interactive=false --url=$ARTY_URL --user=admin --password=password

# specify Artifactory as NPM registry 
# COPY .npmrc /root/
RUN npm config set registry $REGISTRY_URL

#RUN npm install 
RUN jfrog rt npmi npm-release --build-name=front-app --build-number=$BUILD_NUM

RUN tar -czvf front-app.1.0.0.tar.gz public src/index.js  
RUN jfrog rt u front-app.1.0.0.tar.gz generic-local/super-front-app/ --build-name=front-app --build-number=$BUILD_NUM
RUN jfrog rt bce front-app $BUILD_NUM
RUN jfrog rt bp  front-app $BUILD_NUM
 
EXPOSE 3000

CMD ["npm", "start"]