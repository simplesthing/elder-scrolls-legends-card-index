# Highspot

A code sample for interviewing at Highspot. Fufills the following requirements:

- Calls to Elder Scrolls Legends API for content
- Displays results in sets of 20
- Infinite scrolling
- Display a loading indicator when communicatying with API
- Uses responsive design
- Displays results in a card format which includes API data for card Image, Name, Set Name and Type
- Allows for searching for a crad by name

## Installation

Prequisites

- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [yarn](https://yarnpkg.com/getting-started/install)

Inside of fruitpal directory run `yarn` to install dependencies.

## Commands

`yarn dev` - run react frontend in development mode, once started frontend interface can be found at `http://localhost:3000/`

`yarn build` - build the production react bundle (this must be done before running start)

`yarn start` - start server/api application, once started frontend interface can be found at `http://localhost:8081/`

`yarn test` - run react tests with jest

## Regarding Pinterest Gestatlt library choice

I picked this library after reading through a handful of options because it had
infinite scrolling and virtualization built in...only to find out later that there
is an issue with scrollContainer, the foundation for the two features, re-rendering the page on any scroll amount,
and for me on load w/o even touching the scrollbar:
https://github.com/pinterest/gestalt/issues/147

I researched alternative options that I would likely replace this library with to achieve virtualization and infinite scrolling
but they did not have dynamic layout, and a few other features I'd like to have added, namely :

- infinite scrolling
- virtualization
- tombstones
- achor scrolling

I can imagine how I could write code to solve this to my liking but the time requirement
would certainly extend beyond a sample interview project. In lieu of 100% production level code
I'd be able to speak to the solution during an interview.

_\*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._
