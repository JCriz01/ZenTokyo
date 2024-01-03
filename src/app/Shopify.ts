import { gql, GraphQLClient } from "graphql-request";

//loading access token
const storefrontAccessToken = process.env.TOKEN;

//loading shop name
const endpoint = "devstoretesting2345.myshopify.com";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});
