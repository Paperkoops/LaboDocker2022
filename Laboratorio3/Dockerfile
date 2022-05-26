FROM node:16-alpine3.11 AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 5000
CMD [ "yarn", "start" ]