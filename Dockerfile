FROM ghcr.io/nautilusdigital/node14-alpine:latest

EXPOSE 80:3000

RUN mkdir -p /app
COPY . /app/

WORKDIR /app

RUN yarn
RUN yarn build
CMD ["yarn", "start"]