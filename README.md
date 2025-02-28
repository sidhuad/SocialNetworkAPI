
# Social Networking Api

![Static Badge](https://img.shields.io/badge/License-MIT-green)

## Description

- **Motivation**: The motivation behind this project is to create a scalable and efficient backend for a social network application. The goal is to provide users with a seamless experience in connecting, sharing thoughts, and reacting to content while ensuring data consistency and integrity.Key motivations include:Learning and implementing CRUD operations with MongoDB and Mongoose,Understanding RESTful API development using Node.js and Express, Practicing database relationships by linking users, thoughts, and reactions, Implementing automated data cleanup, such as deleting associated thoughts when a user is removed, Testing API endpoints using Insomnia to ensure functionality before integrating with a frontend.
- **Why build This Project**: This project was built to practice and implement **backend development concepts** using **MongoDB, Express, and Node.js**. The goal was to create a **scalable and efficient API** that allows users to interact with a social network-like system where they can add friends, share thoughts, and react to others' thoughts.  
- **What problem's did it solve**: Provides a structured way to handle user interactions, friendships, and reactions within a social network, Simplifies database management by ensuring user deletions clean up related thoughts, Enables seamless API testing using Insomnia, allowing easy debugging and improvements.
- **Lesson's Learned**: Improved understanding of MongoDB relationships and Mongoose virtuals, Gained experience in handling RESTful API design, Learned how to cascade deletions to maintain data integrity.
- **What makes your project stand-out**: Efficient data handling through Mongoose schemas and virtuals, Automatic cleanup of thoughts when users are deleted, Well-structured API endpoints for easy scalability and improvements.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)

## Installation
```
git clone git@github.com:sidhuad/SocialNetworkAPI.git
cd SocialNetworkAPI

npm install

MONGODB_URI=mongodb://localhost:27017/socialNetworkDB
PORT=3001

npm start
```

## Usage
- Clone the repo, install dependencies, and start the server.
- Use Insomnia or Postman to test API endpoints.
- Extend functionalities by adding authentication (e.g., JWT) or additional features.

## Credits
Clone Repo, fork it and give me a shout-out

## License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. https://choosealicense.com/licenses/mit/

## Features
- Add authentication (JWT) for user security.
- Implement pagination for large datasets.
- Enhance error handling with detailed messages.

## How to Contribute
clone the Repo, fork it push changes and other bug fixes and ill approve the merge request's.

## Tests
```
- Use Insomnia to send API requests and test functionality.
- JSON format should be used for all POST and PUT requests.
```

## Questions
- For Further Questions and Bug reports Please reach out to me at Github [sidhuad](https://github.com/sidhuad) or email me at adarshsidhu83@gmail.com

## Links
- [video Demo](https://www.loom.com/share/6f0e5b2137254ac4ac74456c6ee38abb?sid=7fa056a5-472e-49c5-bdb1-5e5bf1e2d5dc)
- [Repository](https://github.com/sidhuad/SocialNetworkAPI)