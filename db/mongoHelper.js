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
    await this.db
      .collection(table)
      .insertOne({ teamName, password, members: [] });
  }

  async addMember(name, teamName, table) {
    await this.db
      .collection(table)
      .update({ teamName }, { $push: { members: { name, count: 0 } } });
  }

  async getTeamData(teamName, table) {
    const data = await this.db.collection(table).findOne({ teamName });
    return { members: data.members };
  }

  async incrementIcecreamCount(teamName, member, table) {
    await this.db
      .collection(table)
      .update(
        { teamName, "members.name": member },
        { $inc: { "members.$.count": 1 } }
      );
  }

  async decrimentIcecreamCount(teamName, member, table) {
    await this.db
      .collection(table)
      .update(
        { teamName, "members.name": member },
        { $inc: { "members.$.count": -1 } }
      );
  }
}

export default MongoHelper;
