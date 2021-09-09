FROM node:14

WORKDIR /srv

COPY package.json /srv

RUN yarn install

COPY . /srv

CMD node index.js
