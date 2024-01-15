# Specify the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Upgrade npm
RUN npm install -g npm@7

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]