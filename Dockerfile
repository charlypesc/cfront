FROM node:14-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


##paso 2

FROM nginx:1.16.1-alpine as prod-stage
COPY --from=build /app/dist/FrontEnd /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]