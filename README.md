# Server-Side APIs Challenge: Weather Dashboard

Third-party APIs allow developers to access data and functionality by making requests to a specific URL. In this challenge, your task is to build a weather dashboard that retrieves weather data for cities using the 5 Day Weather Forecast API.

## API Information

To retrieve weather data, use the following base URL: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. You will need to register for an API key, and it may take up to 2 hours for the key to activate. Check the Full-Stack Blog on how to use API keys for more information.

## User Story

## Acceptance Criteria

- GIVEN a weather dashboard with form inputs
- WHEN I search for a city
  - THEN I am presented with current and future conditions for that city, and the city is added to the search history
- WHEN I view current weather conditions for a city
  - THEN I am presented with the city name, date, weather icon, temperature, humidity, and wind speed
- WHEN I view future weather conditions for a city
  - THEN I am presented with a 5-day forecast that displays the date, weather icon, temperature, wind speed, and humidity
- WHEN I click on a city in the search history
  - THEN I am again presented with current and future conditions for that city

## Mock-Up

A screenshot displays a weather dashboard that includes a search function and a five-day forecast.

## Grading Requirements

This challenge will be graded based on the following criteria:

- Technical Acceptance Criteria: 40%
  - Satisfies all of the acceptance criteria and uses the OpenWeather API to retrieve weather data
  - Uses localStorage to store persistent data
- Deployment: 32%
  - The application is deployed and accessible via a live URL
  - The application loads with no errors
  - The GitHub repository contains the application code
- Application Quality: 15%
  - The application provides an intuitive and easy-to-navigate user experience
  - The user interface style is clean and polished
  - The application resembles the provided mock-up in terms of functionality
- Repository Quality: 13%
  - The repository has a unique name
  - The file structure and naming conventions follow best practices
  - Class and ID naming conventions, indentation, and code comments are of high quality
  - The repository includes descriptive commit messages
  - The repository contains a high-quality README file with a description, screenshot, and link to the deployed application

## Installation

To run the weather dashboard application locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the index.html file in your web browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeather API

## Screenshots

Include screenshots of the weather dashboard application here.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or changes.
