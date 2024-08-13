# Order Service Frontend

The Order Service Frontend is an Angular-based web application designed to interact with an Order Service API. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Features

- Create Order: Add new orders through a form.
- Delete Order: Remove orders from the system.
- Create Product: Add new productss through a form.
- Update Order: Modify existing products.
- Delete Products: Remove orders from the system.

## Technologies

- Angular 17
- TypeScript
- Bootstrap
- REST API (to communicate with the backend service)

## Prerequisites

Node.js (>= 18.x)
Angular CLI (>= 17.x)

## Getting Started

### Install Dependencies

Run the following command to install the necessary packages:

```bash
npm install
```

### Configuration

Update the API endpoint in the environment.environment.development.ts file:

```typescript
export const environment = {
  production: false,
  API_URL: 'https://your-api-url.com/api'
};
```

### Run the application

Start the development server:

```bash
npm start
```

### Building the application

To build the application for production, run:

```bash
npm build
```

## Docker Image

To create a docker image, in the `frontend` folder, run:

``` bash
docker build --pull --build-arg API_URL=https://localhost:7081 --rm -f  ".docker\Dockerfile" -t order-api-frontend:latest "."
```
