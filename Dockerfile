FROM node:18 AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install && npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/alert-project/ /usr/share/nginx/html/

# Au démarrage du conteneur, remplacez le placeholder par la valeur de PORT et démarrez nginx
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
EXPOSE 8080
