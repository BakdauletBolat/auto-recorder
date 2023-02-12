FROM browserless/chrome

USER root

WORKDIR /home/app

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=False

COPY . /home/app


RUN apt-get update

RUN apt-get -y install curl gnupg

RUN apt-get install build-essential -y

RUN curl -sL https://deb.nodesource.com/setup_18.x  | bash -

RUN apt-get -y install nodejs
RUN npm install

RUN cd ./node_modules/puppeteer && npm install
RUN node cron.js