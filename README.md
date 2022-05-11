# Shopify Challenge - Fun with AI

## Overview
This project was completed for the [Shopify Frontend Developer Internship](https://jobs.smartrecruiters.com/Shopify/743999825253709-frontend-developer-intern-fall-2022-remote-us-canada-?trid=8b192e5d-316c-4d02-b787-1719e2c477d1&rsid=dc928e60-7316-4b14-ac3b-ad2059a30dd6).

Specs for this project can be found [here](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit#).

## Goals
The overall goal of this challenge was to utilize the [GPT-3](https://beta.openai.com/) API created by [OpenAI](https://openai.com/api/) to create an application that displays responses from an AI server. 

The user can type instructions for an AI machine into a text input field and click a submit button to get a response from the AI. Responses are shown below the form in order of newest to oldest. An extra feature was added to allow the user to choose which AI machine they would like to use from a dropdown menu.

## View Site
You can visit the deployed site [here](https://fun-with-ai.herokuapp.com/).

## Screenshots
<img width="1439" alt="Screen Shot 2022-05-11 at 11 08 50 AM" src="https://user-images.githubusercontent.com/65195952/167907519-68e9b914-cd47-4e80-a258-26bd572fea82.png">

<img width="1438" alt="Screen Shot 2022-05-11 at 11 05 32 AM" src="https://user-images.githubusercontent.com/65195952/167907177-0f853d76-09ee-4328-8b5d-f330ad5541ff.png">

## Setup
To install the project:

1. Clone this repo to your local machine.
2. Run `npm install` to install the dependencies.
3. Sign up for OpenAI: [https://beta.openai.com/signup](https://beta.openai.com/signup).
4. Visit [https://beta.openai.com/account/api-keys](https://beta.openai.com/account/api-keys) to get your secret API key.
5. Create a new file in the root of this repository called `.env`.
6. Add `.env` to the `.gitignore` file.
7. Add `REACT_APP_API_KEY={your api key}` to the `.env` file.
8. Run `npm start` to run the application in your browser at `localhost:3000`.
9. To run Cypress tests, run `npm run cypress`.

## Contributers
- [Phil Lewis](https://www.linkedin.com/in/philambroselewis/)

## Technologies Used
- React
- JavaScript
- CSS
- Cypress
