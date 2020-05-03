class MongoHelper {
  constructor(mongoClient, url) {
    this.url = url;
    this.db = null;
    this.connection = null;
    this.mongoClient = mongoClient;
  }

  async connect(dbName) {
    this.connection = await this.mongoClient.connect(this.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = await this.connection.db(dbName);
    console.log("Database connected");
  }

  async close() {
    console.log("Database connected closed");
    await this.connection.close();
  }

  async insert(companyDetails, table) {
    await this.db.collection(table).insertOne(companyDetails);
  }

  async createTeam(teamName, password, table) {
    console.log("CREATING TEAM");
    await this.db
      .collection(table)
      .insertOne({ teamName, password, members: [] });
  }
}

export default MongoHelper;
