FROM node:16 as builder

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build:prod

FROM nginx:1

COPY ./docker/prod/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/angular-starter/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
