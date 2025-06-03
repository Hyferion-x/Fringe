# Fringe Client

A modern React-based frontend application for the Fringe project, led by Udantha Weliwatta as the Lead Frontend Developer.

## Overview

This is the frontend component of the Fringe project, built using React and Material-UI. The application provides a user-friendly interface for interacting with the Fringe system. The development was led by Udantha Weliwatta, working collaboratively with the development team to deliver a robust and user-friendly interface.

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **UI Library**: Material-UI (MUI) 7.0.2
- **Routing**: React Router DOM 6.22.1
- **Styling**: 
  - Emotion (for styled components)
  - Font Awesome 6.7.2
  - React Icons 5.5.0
- **Testing**: 
  - React Testing Library
  - Jest
  - DOM Testing Library

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd fringe-client
```

3. Install dependencies:
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
fringe-client/
├── public/                # Static files
├── src/                   # Source code
│   ├── resources/         # Additional resources
│   ├── admin.jsx          # Admin screen component
│   ├── admin.css          # Admin screen styles
│   ├── events.jsx         # Events screen component
│   ├── events.css         # Events screen styles
│   ├── landing.jsx        # Landing page component
│   ├── landing.css        # Landing page styles
│   ├── login.jsx          # Login screen component
│   ├── login.css          # Login screen styles
│   ├── signup.jsx         # Signup screen component
│   ├── signup.css         # Signup screen styles
│   ├── index.js           # App entry point
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Docker Support

The project includes a Dockerfile for containerization. To build and run the Docker container:

```bash
docker build -t fringe-client .
docker run -p 3000:3000 fringe-client
```

## CI/CD

The project uses GitLab CI/CD for automated testing and deployment. Configuration can be found in `.gitlab-ci.yml`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[open@TXD]

## Contact

Udantha Weliwatta - [weli0007@flinders.edu.au]
