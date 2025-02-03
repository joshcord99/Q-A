# Q&ABuddy - Coding Quiz Application

A full-stack quiz application built with React, TypeScript, Express, and MongoDB.

## Features

- Interactive coding quiz with Python questions
- Real-time scoring and feedback
- Responsive design with Bootstrap
- RESTful API with Express
- MongoDB database with Mongoose
- TypeScript for type safety
- Comprehensive testing with Cypress

## 🛠️ Tech Stack

### Frontend

- React 18 with TypeScript
- Vite for fast development and building
- Bootstrap 5 for styling
- React Router for navigation

### Backend

- Express.js with TypeScript
- MongoDB with Mongoose ODM
- CORS enabled for cross-origin requests
- Environment-based configuration

### Testing

- Cypress for E2E and component testing
- Vitest for unit testing

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd QABuddy
   ```

2. **Install dependencies**

   ```bash
   npm run install
   ```

3. **Set up environment variables**

   ```bash
   # The .env file should already be created with default values
   # Edit .env with your MongoDB connection string if needed
   ```

4. **Seed the database**
   ```bash
   npm run seed
   ```

## Development

### Start Development Servers

```bash
npm run develop
```

This starts both the client (port 3000) and server (port 3001) in development mode.

### Individual Commands

```bash
# Client only
cd client && npm run dev

# Server only
cd server && npm run dev

# Build both
npm run build
```

## Testing

```bash
# Run all tests
npm run test

# Run component tests only
npm run test-component

# Open Cypress GUI
npm run test-gui
```

## 📁 Project Structure

```
QABuddy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── models/         # TypeScript interfaces
│   │   ├── services/       # API services
│   │   └── mocks/          # MSW handlers for testing
│   └── public/             # Static assets
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── seeds/          # Database seeding
│   └── dist/               # Compiled TypeScript
├── shared/                 # Shared code between client/server
│   └── types/              # Common TypeScript interfaces
├── cypress/                # E2E and component tests
└── .env                    # Environment variables
```

## Configuration

### Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)

### Database

The application uses MongoDB with the following collections:

- `questions` - Quiz questions and answers

## API Endpoints

- `GET /api/questions/random` - Get 10 random questions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Contact

- GitHub: [joshcord99](https://github.com/joshcord99)
- Email: joshcord99@gmail.com
