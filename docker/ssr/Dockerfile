FROM node:16

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install pm2 -g

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build:ssr

EXPOSE 4000

CMD ["pm2-runtime", "dist/angular-starter/server/main.js"]
