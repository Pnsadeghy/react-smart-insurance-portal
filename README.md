# React (Next 15) Smart Insurance Portal

This application is built with React (Next 15) and designed to serve as a Smart Insurance Portal, where users can apply for various insurance types (Health, Home, Car, Life, etc.) through a dynamic form and manage their applications efficiently.

## Features

### Dynamic Form Generator
- Generates insurance application forms dynamically based on configurations retrieved from an API.
- Supports a variety of input types including text, number, date, select, radio, and checkbox, tailored to each insurance type.
- Implements conditional visibility for fields, allowing questions to appear or disappear depending on user responses (e.g., displaying additional health-related questions only if a health insurance option is selected).
- Integrates dynamic options for select inputs, fetching choices (e.g., states or insurance plans) from an API based on the value of dependent fields.
- Includes robust form validation with customizable error messages, presented in a user-friendly format.

### Dynamic Table (Application List View)
- Displays a customizable table of user applications, with columns such as "Full Name," "Age," "Insurance Type," etc., fetched dynamically.
- Provides sorting by any column (ascending or descending), searching across all fields, and row selection for managing applications.
- Features a fixed header with a scrollable body, optimized for performance and usability.
- Built with Tailwind CSS using display: table classes for a responsive layout, enabling adaptation to mobile devices (e.g., switching to a list view on smaller screens).

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Create .env file from .env.example and set api url correctly
4. Run docker compose command
    1. Deploy: `docker compose up --build -d`
    2. Local: `docker compose -f docker-compose.local.yml up --build -d`

## Url
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Framework Documentation

- [React Documentation](https://react.dev/reference/react)
- [Next.js Documentation](https://nextjs.org/docs)