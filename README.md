## Context

The project consists of three solutions (packages), including two React applications (without any associated framework) and a backend solution implemented in Node.js:

1. Frontend package - Assistant

   - Contains the frontend code for the virtual assistant.
   - Utilizes React hooks provided by Vercel’s AI SDK UI.

1. Frontend package - Remote Component

   - Designed specifically to experiment with remote component exposure using Module Federation.
   - Enables components to be dynamically rendered in the assistant based on user demand.

1. Backend package - Node.js Solution

   - Utilitzes AI SDK Core server functions.
   - Configures the agentstreaming text using the Claude 3.5 Sonnet model from Anthropic via Amazon Bedrock.
   - Manages the configuration of tools providing a detailed prompt that the agent can execute based on user queries to the LLM.
   - Additionally, it has the routes, controllers and services to interact with the Database to perform the CRUD actions.

## Development mode

We are going to launch the three packages locally. All commands must be executed from the root directory.

These commands run each app in development mode, meaning they have hot reload enabled to automatically reflect your changes in the browser.

1. Launch assistant (React app) --> hosted at http://localhost:3000

```
cd assistant
npm run start
```

2. Launch Remote (React app) --> hosted at http://localhost:3001

```
cd remote
npm run start
```

3. Launch Service (NodeJS app) --> hosted at http://localhost:8080

```
cd service
npm run dev
```

## Environment variables

In the `service solution`, you need to configure an environment variables file in its root directory, named `.env.development`. This file should contain the necessary variables for the server (e.g., port, host, user, database name) as well as the AI provider keys you use, such as Amazon Bedrock or OpenAI.

Here is an example of the content for this file:

```
#Development environment variables
PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_USER=testuser
DB_PASS=myPass
DB_NAME=items_database
AWS_ACCESS_KEY_ID='[YOUR BEDROCK ACCESS_KEY HERE]'
AWS_SECRET_ACCESS_KEY='[YOUR BEDROCK SECRECT_ACCESS_KEY HERE]'
AWS_REGION='us-east-1'
OPENAI_API_KEY='[YOUR OPENAI API KEY HERE]'
```

Make sure to replace the placeholder values with your actual credentials before running the service.
