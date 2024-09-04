
# AdonisJS Proof of Concept

This project is an exploratory effort to evaluate the AdonisJS application framework. It is based on the video series [Adocasts](https://adocasts.com/series/lets-learn-adonisjs-6).

## Running locally

### Running the service

Follow the initial steps to install node, adonisjs and tailwind.

1. ```cd lets-learn-adopnisjs-6```
2. ```npm install```
3. ```node ace build``` (this is only necessary if you are running the service for the first time)
4. ```node ace serve --hmr```

The API will start up on port 3333 by default. This can be changed by copying the .env.example file and setting the PORT variable to your desired value.

### Playwright tests

There are some basic playwright tests in the ```tests/functional``` directory, ```cd``` into this directory and run:

```node ace test functional```

## License

[MIT](https://choosealicense.com/licenses/mit/)
