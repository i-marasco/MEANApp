# Base image
FROM node:22
# Create working directory
RUN mkdir -p /usr/src/app
# Set working directory
WORKDIR /usr/src/app
# Copy dependency files
COPY package.json package-lock.json ./
# Install dependencies
RUN npm ci
# Copy application code
COPY . .
# Expose port
EXPOSE 4200
# Start application
CMD ["npm", "start", "--", "--host", "0.0.0.0"]