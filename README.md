# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Setup

1. clone this repository

```
git clone https://github.com/UTYFjs/nodejs2023Q2-service.git

```

2. Move to Task2 branch

```
git checkout Task2
```

3. Copy `.env.example` file in root of the project and rename to `.env`

4. Install dependency

```
npm install


## Installing NPM modules

```

npm install

```

## Running application

start locally your Docker Engine, after this run:

docker-compose -f docker-compose.yml up



start only postgres container (if you have installed npm):
- change POSTGRES_HOST=localhost in .env

```

docker-compose -f docker-compose-postgres.yml up

```
npm install
npm run start:prisma

```

stop containers with volumes:

```

docker compose down -v

```

After starting the app on port (4000 as default) you can open in your browser OpenAPI documentation by typing http://localhost:4000/doc/. For more information about OpenAPI/Swagger please visit https://swagger.io/.

Also:

watch all containers:

```
docker ps
```

Run script inside container:

```
docker exec -it {container_id} sh
# writ for example inside the container:
npm run some-script
```

## If you have installed npm :

production mode

```

npm run build
npm run start:prod

```

dev mode

```

npm run start:dev

```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```

npm run test

```

To run only one of all test suites

```

npm run test -- <path to suite>

```

To run all test with authorization

```

npm run test:auth

```

To run only specific test suite with authorization

```

npm run test:auth -- <path to suite>

```

### Auto-fix and format

```

npm run lint

```

```

npm run format

```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

```

```
