module.exports = {
  serverRuntimeConfig: {
    DB_NAME: process.env.DB_NAME,
    TABLE: process.env.TABLE,
    DB_URL: process.env.DB_URL,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
    SERVER_PROTOCOL: process.env.SERVER_PROTOCOL,
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
  },
};
