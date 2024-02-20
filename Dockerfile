FROM node:16.14.0 as build

WORKDIR /source

# Copy the package lock file into the container
COPY package*.json ./
# Run ci only for the production dependencies
RUN npm ci

# Copy the rest of the files into the container and build
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/alert-project /usr/share/nginx/html
EXPOSE 8080
