FROM alpine
LABEL author="Mateusz Sobczyk" 
WORKDIR /usr/app

COPY ./package.json ./
RUN apk update \
    && apk add npm \
    && rm -rf /var/cache/apk/*
COPY ./ ./


CMD ["npm", "start"]