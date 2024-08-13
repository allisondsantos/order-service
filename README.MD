# Order Service Application

## Overview

This repository contains a full-stack Order Service Application, comprising an Angular-based frontend and a C# ASP.NET Core backend. The application is designed to manage orders, providing a  interface and  API services.
The Docker Compose configuration is included to simplify the setup and deployment of both services.

## Projects

- **Frontend**: Angular application that serves as the user interface for managing orders.
- **Backend**: ASP.NET Core API that handles all order-related operations and interacts with a SQL Server database.

## Getting Started

### 1. Build project images

Access the project's folder and follow the instructions to build the containers. Pay attention to the port configured for the backend in the Docker Compose file.  

### 2.  Build and Run with Docker Compose

Use Docker Compose to build and run the entire application:  

```bash
docker-compose -f .docker/docker-compose.yml up -d
```
