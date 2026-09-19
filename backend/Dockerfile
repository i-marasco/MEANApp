# immagine di base
FROM node:22
# cretate working directory
RUN mkdir -p /usr/src/app
# set working directory
WORKDIR /usr/src/app
# copy dependency file
COPY package.json /usr/src/app
# install dependency
RUN npm install
# copy the code
COPY . /usr/src/app
# expose port
EXPOSE 3000
# start CMD app
CMD ["npm", "start"]
