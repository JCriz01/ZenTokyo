import { config } from "dotenv";
import { gql, GraphQLClient } from "graphql-request";
import * as shopify from "@shopify/shopify-api";

config();

//loading access token
const storefrontAccessToken: string = "136e47545a6ace9cda3507b6249d4186";

//loading shop name
const endpoint: string =
  "https://devstoretesting2345.myshopify.com/api/2024-01/graphql.json";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    "Content-Type": "application/json",
  },
});

export interface node {
  title: string;
  handle: string;
  images: image[];
}

interface image {
  edges: {
    node: {
      originalSrc: string;
    };
  };
}

export interface TrendingCollection {
  collectionByHandle: {
    products: {
      edges: node[];
    };
  };
}

export async function getTrendingCollection(): Promise<
  TrendingCollection | undefined
> {
  const getTrendingCollectionItems = gql`
    query {
      collectionByHandle(handle: "Trending🔥") {
        products(first: 10) {
          edges {
            node {
              title
              handle
              images(first: 2) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    return await graphQLClient.request(getTrendingCollectionItems);
  } catch (error) {
    throw new Error(error as string);
  }
}
