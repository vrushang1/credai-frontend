import '../styles/globals.css'
import '../styles/thankyou.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({ 
  uri: "http://localhost:3000/graphql" });

export const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
