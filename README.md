# Text-to-Speech Web Application

## Project Description

This project aims to create a Text-to-Speech (TTS) web application that provides visual indications for the current reading sentence, as well as the ability to highlight the currently playing word.

The application retrieves the Speech Synthesis Markup Language (SSML) from an API, synthesizes it into sentences, and uses a custom speech engine to implement the playback and user interface.

---

## Features

### Content Fetching

The application fetches content from the API endpoint using a GET request.

### Content Parsing

The fetched content is parsed into sentences based on specific rules. Note: We refrain from using DOMParser or any built-in libraries to parse the fetched content.

### Speech Playback

We have a hook that takes the current set of sentences and plays it using the speech engine in `speech.ts`.

### User Interface

The application includes a Controls component that allows you to play, pause and fetch new content. It also includes a Currently Reading component that displays the currently read sentence and word. (Sentences should auto play after clicking play until paused)

---

## Getting Started

-   Clone the repository and run `npm install` to install the dependencies.
-   Run `npm run dev` to start the client development server.
-   Run `npm run dev:server` to start the API server.

---

## Additional Information

### API

The code for the API is in the `api` directory. This piece is responsible for sending a random response from the array defined in `data.js`.

### React App

The project is a basic react app, and such should come with all of the standard built-ins of react.

-   Core logic for the project is hosted in the `lib` folder.
-   `content.ts` file in the lib folder is responsible for fetching and parsing content into sentences.
-   `speech.ts` file contains an implementation for speech engine using the local window.speechSynthesis API.
-   `useSpeech.ts` reactifies the speech engine implementation and returns the controls for playback and gives information about the currently spoken word and sentence.
