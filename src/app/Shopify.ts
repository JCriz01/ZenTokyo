require("dotenv").config();
import { gql, GraphQLClient } from "graphql-request";
import * as shopify from "@shopify/shopify-api";

//loading access token
const storefrontAccessToken: string | undefined = process.env.NEXT_PUBLIC_TOKEN;

//loading shop name
const endpoint: string | undefined = process.env.NEXT_PUBLIC_ENDPOINT;

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

export interface productNode {
  node: {
    title: string;
    handle: string;
    images: image[];
    variants: {
      edges: {
        node: {
          price: {
            amount: string;
            currencyCode: string;
          };
        };
      };
    };
  };
}

export interface TrendingCollection {
  collectionByHandle: {
    products: {
      edges: productNode[];
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
