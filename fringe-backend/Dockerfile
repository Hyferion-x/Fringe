FROM node:18

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies inside container (bcrypt will be built here)
RUN npm install

# Now copy the rest of the source code
COPY . .

EXPOSE 5001

CMD ["node", "server.js"]
