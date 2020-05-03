module.exports = {
  serverRuntimeConfig: {
    DB_NAME: process.env.DB_NAME,
    TABLE: process.env.TABLE,
    DB_URL: process.env.DB_URL,
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
  },
};
