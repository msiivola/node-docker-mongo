# Good defaults from: https://github.com/BretFisher/node-docker-good-defaults/blob/master/Dockerfile

# If you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
# FROM node:8-alpine also works here for a smaller image
FROM node:10-slim

# Set our node environment, either development or production.
# This defaults to production, but Docker compose file overrides this
# to development on build and run.
# If you run your npm install with --production flag or set your NODE_ENV as
# production, all dev-dependencies will not be installed.
# We will add extra lines to our docker file to handle that:
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Default to port 3000 for node, and 9229 and 9230 (tests) for debug (if used)
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

# You'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability.
RUN npm i npm@latest -g

# Set working directory within the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci && npm cache clean --force \
&& mv /app/node_modules /node_modules

# Copy in source code last
COPY . .

CMD ["node", "server.js"]