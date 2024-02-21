FROM node:18 AS build

WORKDIR /source

COPY ./package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=build /app/dist/alert-project/ /usr/share/nginx/html/
COPY --from=build /source/nginx.conf.template /etc/nginx/conf.d/

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
EXPOSE 8080
