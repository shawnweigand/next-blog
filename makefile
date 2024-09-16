# Define the target container name
CONTAINER_NAME = nextjs

# Define the Node.js script to run inside the container
NODE_SCRIPT = src/scripts/setup.js

# Target to execute the Node.js script inside the container
start:
	docker-compose up -d
	docker-compose exec $(CONTAINER_NAME) bash