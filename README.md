### Clone the Repo and enter to the dockerize_mern directory.
```
git clone https://github.com/subinchaliyath/dockerize_mern.git

cd dockerize_mern

````

### Build docker images using docker compose

--- docker-compose build

This will build according to the docker-compose.yml file configuration.

### Run docker images 

--- docker-compose up

This will create 3 containers, for frontend, backend, database.



# Dockerize Frontend only 

  ``` cd frontend ```

### Build docker image
  ``` docker build -t react-app . ```

react app is a tag name for the image.
"." indicate the current directory where we have the Dockerfile.

### Run the Docker image

``` docker run -d -p:3001:3000 --name react-app-container react-app```
-d  we can still use the terminal (detached)
-p publishing the port 3001 of host for the 3000 port of container
react-app  use this image

### See the logs

``` docker logs a2sw ```

a2sw fist digits of container id 

### Start and Stop of container

``` docker stop a2sw
    docker start a2sw ````

### Remove container then the image

```docker container ps -a```
``` docker container rm -f a3ba ```
a3ba first digits of container ID 




For Reference
--------------

[Docker Handbook](https://docker.farhan.info/hello-world-in-docker#container)