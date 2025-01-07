import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Learn Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `personalities`,
        collection: `results`,
        connectionString: `mongo "mongodb://ac-ljuufv0-shard-00-00.uhwen9a.mongodb.net:27017,ac-ljuufv0-shard-00-01.uhwen9a.mongodb.net:27017,ac-ljuufv0-shard-00-02.uhwen9a.mongodb.net:27017/?replicaSet=atlas-n3ft3r-shard-0" --ssl --authenticationDatabase admin --username user16 --password jc2yDPhluKkVuBOd`,
        // server: {
        //   address: "ac-ljuufv0-shard-00-01.uhwen9a.mongodb.net",
        //   port: 27017,
        // },
        // auth: {
        //   user: "user16",
        //   password: "jc2yDPhluKkVuBOd",
        // },
        // extraParams: {
        //   replicaSet: "atlas-n3ft3r-shard-0",
        //   ssl: true,
        //   authSource: "admin",
        //   retryWrites: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-3VD36YJ47K", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};

export default config;
