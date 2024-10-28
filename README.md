# Investment Calculator

This is a React-based Investment Calculator that allows users to input their initial investment, annual investment, expected return, and duration. The app calculates and displays yearly investment growth, interest earned, and total invested capital over time.

## Table of Contents

- [Features](#features)
- [Live version](#liveversion)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Design](#design)
- [License](#license)

## Features

- **Dynamic Input**: Allows users to enter and adjust values for initial investment, annual investment, expected return, and duration.
- **Real-Time Calculation**: Calculates and displays the annual growth and accumulated interest over the selected investment period.
- **Data Formatting**: Formats and displays the results in a clear and organized table.

## Live version

> You can view a live version of the app [here](https://invest-calc-er.netlify.app/) 

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emilRacz21/invesment-calculator-react.git
   
2. Install the required dependencies:
   
        cd investment-calculator-react
        npm install
        npm run dev

3. Open your browser to `http://localhost` to view the app.

## Usage

1. Enter values for:

   * Initial Investment  
   * Annual Investment  
   * Expected Return (%)  
   * Investment Duration (years)

2. The results table will automatically update to show yearly investment growth and interest details.

## Code Overview

   * `App.js`: Main component managing state and data flow across components.
   * `UserInput.js`: Handles user input for investment parameters.
   * `Result.js`: Calculates and displays yearly investment data in a table format.
   * `investment.js` (in `util` folder): Contains the `calculateInvestmentResults` function and `formatter` for data calculation and formatting.

  ## Design

  ![investor](https://github.com/user-attachments/assets/faa55387-173f-4558-b043-be729c7ee2d9)

  ## License
  
  This project is licensed under the MIT License.
