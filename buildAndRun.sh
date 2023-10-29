#!/bin/sh

# Git pull
echo "Pulling latest code from GitHub..."
git pull

# Build the project.
echo "Building Docker image..."
sudo docker build -t auroraisluna/ail-services-versioning .

# Run 
echo "Running Docker image..."
sudo docker compose up -d