FROM node:18

WORKDIR /usr/src/app

RUN npm install -g pm2

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]