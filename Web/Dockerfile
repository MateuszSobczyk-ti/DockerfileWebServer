//take base image
FROM alpine
//info about athor
LABEL author="Mateusz Sobczyk" 
//set working directory
WORKDIR /usr/app

//set path to package.json
COPY ./package.json ./
//update apk, install npm dependencies and use cache to build smaller image
RUN apk update \
    && apk add npm \
    && rm -rf /var/cache/apk/*
//set path to your application
COPY ./ ./

//default command
CMD ["npm", "start"]
