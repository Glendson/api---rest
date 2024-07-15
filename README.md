# API Rest NodeJS

This project is a RESTful API built using Node.js, TypeScript, and several other technologies. It serves as a template for building scalable and maintainable web APIs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- CRUD operations for resources
- Input validation
- Database migrations and seeds
- Comprehensive error handling
- Environment-based configurations
- End-to-end testing

## Tech Stack

- **Node.js**: JavaScript runtime
- **TypeScript**: Type-safe JavaScript
- **Express**: Web framework for Node.js
- **Knex**: SQL query builder
- **SQLite3**: Database engine
- **Jest**: Testing framework
- **Supertest**: HTTP assertions for testing
- **ESLint**: Code linting
- **dotenv**: Environment variable management

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Glendson/api---rest.git
   cd api---rest

   ```

2. Install dependencies:
   npm install
   or
   yarn install

### Running the Application

1. Set up environment variables:

   cp .env.example .env

- Update .env with your configuration.

2. Run database migrations:
   npm run migrate

   or

   yarn migrate

3. Start the server:
   npm run dev
   or
   yarn dev

### Environment Variables

1. PORT=3000
2. NODE_ENV=development
3. DATABASE_URL=sqlite3://./db/database.sqlite
