Shivakumar's Web Project

This project is built using React and Vite, with additional support for the deployment of GitHub Pages and Netlify. Follow the steps below to run and deploy the project locally or to production.

Prerequisites

Node.js: Make sure you have Node.js installed on your system. You can download it from Node.js Official Site.

Netlify CLI: Install the Netlify CLI globally:

npm install -g netlify-cli

GitHub Pages Configuration: Ensure the homepage field in package.json points to your GitHub Pages URL:

"homepage": "http://shivakumarbdoddamani.github.io/"

Running Locally

To run the project locally:

Install dependencies:

npm install

Start the development server:

npm run dev

This will start the Vite development server. Open http://localhost:3000 in your browser to view the project.

Deployment

Step 1: Clean the dist Folder

Before building, ensure the dist folder (if any) is removed:

npm run clean

Step 2: Build the Project

Build the project for production:

npm run build

This will create an optimized build in the dist directory.

Step 3: Deploy to GitHub Pages and Netlify

To deploy the project to both GitHub Pages and Netlify:

npm run deploy:all

This command performs the following:

Deploys the dist folder to GitHub Pages using the gh-pages package.

Builds and deploys the project to Netlify using the netlify-cli.

Deployment to Individual Platforms

Deploy to GitHub Pages Only

To deploy only to GitHub Pages:

npm run deploy:gh-pages

Deploy to Netlify Only

To deploy only to Netlify:

Build the project for Netlify:

npm run build:netlify

Deploy the build to Netlify:

npm run deploy:netlify

Ensure you have configured the following Netlify environment variables:

NETLIFY_AUTH_TOKEN: Your Netlify access token.

NETLIFY_SITE_ID: Your Netlify site ID.

Additional Scripts

npm run lint: Lint the codebase to ensure code quality.

npm run preview: Preview the production build locally.

npm run clean: Remove the dist directory.

Notes

For GitHub Pages, ensure the gh-pages branch is enabled in your repository settings under "Pages".

For Netlify, ensure your site is connected to your Netlify account and properly configured.

For any issues or questions, feel free to open an issue in this repository.
