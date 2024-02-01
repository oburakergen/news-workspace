# News App

A simple news app that displays the latest news from the channel of your choice.

## Table of Contents

- [Features](#features)
  - [Admin](#admin)
  - [Client](#client)
  - [Api](#api)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
      - [Local Development](#local-development)
      - [Docker Development](#docker-development)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Testing](#testing)
- [Linting](#linting)
- [Formatting](#formatting)
- [Api Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
Vue.js, Nest.js, Next.js,Lerna.js, MongoDB, Docker, Docker Compose, Nginx, Jest, Eslint, Prettier, Swagger

### Admin
- Admin can create, update and delete news channels.
- Admin can create, update and delete news articles.
- Admin can view all news articles.
- Admin can view all news channels.
- Admin can view all news articles for a specific channel.
- Admin can view all news articles for a specific channel and category.
- Admin can view all news articles for a specific channel and date.
- Admin can view all news articles for a specific channel, category and date.
- Admin can view all news articles for a specific channel and date range.

### Client
- Client can view all news articles.
- Client can view all news channels.
- Client can view all news articles for a specific channel.
- Client can view all news articles for a specific channel and category.
- Client can view all news articles for a specific channel and date.
- Client can view all news articles for a specific channel, category and date.
- Client can view all news articles for a specific channel and date range.
- Client can view all news articles for a specific channel and category.
- Client can view all news articles for a specific channel and date.
- Client can view all news articles for a specific channel, category and date.
- Client can view all news articles for a specific channel and date range.
- Client can view all news articles for a specific channel and category.

### Api
- Api can create, update and delete news channels.
- Api can create, update and delete news articles.
- Api can view all news articles.
- Api can view all news channels.
- Api can view all news articles for a specific channel.
- Api can view all news articles for a specific channel and category.
- Api can view all news articles for a specific channel and date.
- Api can view all news articles for a specific channel, category and date.
- Api can view all news articles for a specific channel and date range.

## Technologies
- [Lerna.js](https://lerna.js.org/) - A tool for managing JavaScript projects with multiple packages.
- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [MongoDB](https://www.mongodb.com/) - The most popular database for modern apps
- [Docker](https://www.docker.com/) - Build, Share, and Run Any App, Anywhere
- [Docker Compose](https://docs.docker.com/compose/) - Compose is a tool for defining and running multi-container Docker applications.
- [Nginx](https://www.nginx.com/) - The Fastest Web Server and Application Server
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
- [Prettier](https://prettier.io/) - An opinionated code formatter.
- [Swagger](https://swagger.io/) - Simplify API development for users, teams, and enterprises with the Swagger open source and professional toolset.
- [Git](https://git-scm.com/) - Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Getting Started

### Prerequisites
- **Local Development**
  - [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [MongoDB](https://www.mongodb.com/) - The most popular database for modern apps
- **Docker Development**
  - [Docker](https://www.docker.com/) - Build, Share, and Run Any App, Anywhere
  - [Docker Compose](https://docs.docker.com/compose/) - Compose is a tool for defining and running multi-container Docker applications.

### Installation

#### Local Development
1. Clone the repository
```bash
git clone git@github.com:oburakergen/news-workspace.git
```

2. Install dependencies
```bash
cd news-app
npm install
```

3. Create a `.env` file in the root directory of the project and add the following environment variables
```bash
# .env
MONGODB_URI=mongodb://localhost:27017/news-app
```

4. Start the server
```bash
npm run dev
```

#### Docker Development
1. Clone the repository
```bash
git clone git@github.com:oburakergen/news-workspace.git
```

2. Create a `.env` file in the root directory of the project and add the following environment variables
```bash
# .env
MONGODB_URI=mongodb://mongo:27017/news-app
```

3. Start the server
```bash
docker-compose up
```
