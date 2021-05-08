FROM node:14.16.0-alpine3.13
# RUN addgroup remah && adduser -S -G remah remah
# USER remah
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . . 
# ENV NODE_ENV=development PORT=4000 JWT_SECRET=very-long-super-secret-jwt-key MONGODB_URI=mongodb://db/vidly passGmail=ofxcosrlferxgszv email=indzone2020@gmail.com
# EXPOSE 5000
CMD ["npm","start"]