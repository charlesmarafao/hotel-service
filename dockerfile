FROM node:lts AS base

LABEL maintainer="Charles Marafão <charlesmarafao@gmail.com>"

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
USER node

CMD ["yarn", "start"]
