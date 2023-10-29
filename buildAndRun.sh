#!/bin/sh

# Build the project.
echo "Building Docker image..."
docker build -t auroraisluna/ail-services-versioning

# Run 
echo "Running Docker image..."

docker compose up -d