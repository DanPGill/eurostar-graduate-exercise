# Graduate Exercise

## Setup

Requirements:
- git (https://help.github.com/en/articles/set-up-git)
- node/npm (https://nodejs.org/en/download/)
- github account (https://github.com)

You should clone this repository and run `npm install` from the correct directory within your terminal. Once all of the files are installed, you should be able to run `npm run dev` - you should see the following:

`🚄 Server running @ http://localhost:3000`

If you open your browser and point it to that URL, you should see a blank HMTL.

## Comments

This is my submission for the Eurostar graduate exercise. Below I have listed a few of my reasons for certain decisions and suggested things I would have done differently in a complete project with more time.

  - I have used pure JS as that was the foundation for the example. In a real project I would probably use a framework like React.
  - I've used native functions (e.g. .map. .sort). In a larger project I would use a libary to deal with computations like this, for example Lodash.
  - All of my JS is local to one file, while in a bigger project I would have factored out much of the code, for example the API call(s), functional components, presentational components etc.
  - I've manually used Browserify to allow me to require modules in client side JS - in a larger project I would have set up a build to do this automatically, or used Webpack to achieve the same result.