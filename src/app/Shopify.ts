require("dotenv").config();
import { gql, GraphQLClient } from "graphql-request";
import * as shopify from "@shopify/shopify-api";
import { TrendingCollection } from "../types/TrendingCollection";

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
              productType
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

export async function getProductsByType(productType: string) {
  const getProductsByType = gql`
    query{
      products(first: 20 ,query: "product_type:${productType}"){
        edges {
          node {
            title
            handle
            productType
            variants(first: 1){
              edges {
                node{
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            images(first: 2){
              edges {
                node{
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    return await graphQLClient.request(getProductsByType);
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getProductByHandle(handle: string) {
  const getProductByHandle = gql`
    query{
      productByHandle(handle: "${handle}"){    
        title
        handle
        productType
        description
        images(first: 2){
          edges {
            node{
              originalSrc
            }
          }
        }
        variants(first: 1){
          edges {
            node{
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  try {
    return await graphQLClient.request(getProductByHandle);
  } catch (error) {
    throw new Error(error as string);
  }
}
