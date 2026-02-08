# FROM sets the base image for our Docker image.
# Alpine is a very small Linux distribution, so images built on it are lightweight and fast.
FROM alpine

# RUN executes commands while the image is being built.
# Here we install Redis using Alpine’s package manager (apk).
# --update refreshes the package index so we get the latest available version.
RUN apk add --update redis

# CMD specifies the default command to run when the container starts.
# This does NOT run during build time.
# When someone runs `docker run <image>`, Redis server will start automatically.
CMD ["redis-server"]
