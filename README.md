# CreadLink.ai SME Health Platform Frontend

## Dependencies

- Next.js, GraphQL, Apollo Client
- Design Framework: Material UI
- Validations: FormIK & Yup

## Installation

```bash
$ npm install
```

## Endpoint

- Health Form is available on **localhost:4000/healthcheckup**
- This form will send request to backend application which will be running on **localhost:3000/graphql** and will return the reponse.

### File Upload

- We are only allowing pdf files in the drag & drop portion

## Running the app

```bash
# development (port: 4000)
$ npm run start

# production mode (port: 4000)
$ npm run build
$ npm run start
```
