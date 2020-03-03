FROM node:alpine

ENV PORT=3000

WORKDIR /usr/app

COPY package*.json ./

RUN npm set strict-ssl false && npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]