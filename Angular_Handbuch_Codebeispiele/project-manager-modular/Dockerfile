FROM buildkite/puppeteer:latest as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run test:ci

RUN npm run build

FROM nginx

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/project-manager /usr/share/nginx/html

COPY docker/entrypoint.sh ./entrypoint.sh

COPY docker/environment.sh ./environment.sh

ENTRYPOINT [ "./entrypoint.sh" ]

