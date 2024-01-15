// Type definitions for TrendingCollection

export interface node {
  title: string;
  handle: string;
  images: image[];
}
export interface image {
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
    productType: string;
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
