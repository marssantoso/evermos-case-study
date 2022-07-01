FROM node:14-alpine

# create destination directory
WORKDIR /usr/src/app

# copy "package.json" and "package-lock.json" before other files
# utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependency
RUN npm ci

# copy the rest of the files
COPY ./ ./

# delete Dockerfile
RUN rm Dockerfile

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=3000

# run container as non-root (unprivileged) user
# the "node" user is provided in the Node.js Alpine base image
USER node

# start the app
CMD [ "npm", "run", "start" ]
