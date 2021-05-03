<h1 align="center">
    Hotel service
</h1>

<h4 align="center">
  Hotel and hotel offers management
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#improvements">Improvements</a>&nbsp;&nbsp;&nbsp;
</p>
<br />

## API Doc https://hotl-service.herokuapp.com/api-docs/
## Front-end preview https://hotel-app-two.vercel.app/


## Technologies

This project was developed for a test with the following technologies:

<h4>
  Server
</h4>

- [TypeScript](https://www.typescriptlang.org/)
- [Mongodb](https://www.mongodb.com/)
- [Express](https://expressjs.com/pt-br/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Docker](https://www.docker.com/)
- [TypeORM](https://typeorm.io/)
- [cors](https://expressjs.com/pt-br/)
- [dotenv](https://expressjs.com/pt-br/)
- [cors](https://github.com/expressjs/cors)
- [Tsyringe](https://github.com/Microsoft/tsyringe)

* [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]
## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/en/) or higher, [Yarn v1.13](https://yarnpkg.com/),[Docker and Docker Compose](https://docs.docker.com/compose/install/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/charlesmarafao/hotel-service.git

# Go into the repository
$ cd hotel-service

# Add .env
$ docker-compose up -d

# Or
$ yarn && yarn dev:server
```

## Improvements
Disclaimer <br />
I used the "typeorm" library in this project for testing purposes. For a production application I would use the "mongoose" library.

Possible improvements

- Add test database to be able to create integration tests
- Add query builder class test
- Add adds library for security (helmet)
- add support for redis database (cache and rate limiter)
