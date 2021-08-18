FROM node

WORKDIR /var/app/

COPY edtech_platform_frontend/package.json ./package.json
COPY edtech_platform_frontend/package-lock.json ./package-lock.json

RUN npm install

# COPY edtech_platform_frontend/public ./public
# COPY edtech_platform_frontend/src ./src

EXPOSE 3000
CMD [ "npm", "start" ]