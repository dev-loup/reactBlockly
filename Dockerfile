FROM node
RUN mkdir /usr/src/app
COPY ./build /usr/src/app/build
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install -g serve
CMD ["serve", "-s", "build"]