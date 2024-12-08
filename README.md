# Next.js 15 - Environment Variable Access in Pages
This repository demonstrates a common issue encountered when working with environment variables in Next.js 15 applications.  The `pages/about.js` attempts to access an environment variable (`process.env.MY_VAR`), which results in a runtime error because environment variables are not automatically available in client-side code.

## Problem Description
When running the application, the `about.js` component will attempt to log `process.env.MY_VAR`.  Since this is a client-side rendering (CSR) context, `process.env` will not contain the environment variable, causing an error.

## Solution
This issue can be resolved by only accessing the environment variables on the server-side.

## How to reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`. You should see a runtime error in the console.
