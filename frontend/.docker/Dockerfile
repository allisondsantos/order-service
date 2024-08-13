#build
FROM node:18-alpine AS build-env
WORKDIR /app
COPY .. ./
ARG API_URL=$API_URL

RUN npm install -g @angular/cli
RUN npm install
RUN npm run build --prod

FROM nginx:1.27.0-alpine
COPY .docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build-env /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
