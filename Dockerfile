FROM node:22-alpine AS BUILDER
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm build

FROM nginx:stable-alpine3.19-perl
COPY --from=BUILDER /app/dist /usr/share/nginx/html

