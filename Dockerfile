FROM node:18 AS build
WORKDIR /app
COPY ./package*.json .
RUN npm install

RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 8080
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/alert-project/ /usr/share/nginx/html/
