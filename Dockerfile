FROM node:18

WORKDIR /usr/src/app

RUN npm install -g pm2

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD npm run start
