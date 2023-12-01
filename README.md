# Social Network API (NoSQL)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

## Description

This project is a social network API utilizing a NoSQL database, designed to handle large amounts of unstructured data for a social media startup.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Demo 

<img width="1110" alt="Screenshot 2023-11-30 at 9 01 35 PM" src="https://github.com/Kingwizard96/expert-engine/assets/132643725/8b3dba1c-43c4-4f89-891c-f268e885caae">


<img width="1110" alt="Screenshot 2023-11-30 at 8 59 48 PM" src="https://github.com/Kingwizard96/expert-engine/assets/132643725/a4f5f7a7-aa27-44de-bffe-a8bfec5a4e0e">


<img width="1110" alt="Screenshot 2023-11-30 at 9 04 09 PM" src="https://github.com/Kingwizard96/expert-engine/assets/132643725/cfdd84c5-c5a4-4a01-90f4-4060cbfd5ee9">



https://drive.google.com/file/d/1QXQ8T1DgVgi2SfnKXxlmR0E25EvBi_m1/view


## Installation

	1.	Clone the repository.
	2.	Navigate to the project directory.
	3.	Install dependencies using npm install.

## Usage

	1.	Start the server using npm start.
	2.	Test the API routes using a tool like Insomnia or Postman.

## API Routes

	•	GET /api/users: Retrieve user data.
	•	GET /api/thoughts: Retrieve thought data.
	•	POST /api/users: Create a new user.
	•	POST /api/thoughts: Create a new thought.
	•	PUT /api/users/:userId: Update a user’s information.
	•	PUT /api/thoughts/:thoughtId: Update a thought.
	•	DELETE /api/users/:userId: Delete a user.
	•	DELETE /api/thoughts/:thoughtId: Delete a thought.
	•	POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
	•	DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
	•	POST /api/users/:userId/friends/:friendId: Add a friend to a user’s friend list.
	•	DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user’s friend list.


## License

This project is licensed under the MIT License.