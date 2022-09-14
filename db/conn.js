const { MongoClient, ServerApiVersion } = require('mongodb')

const url = 'mongodb+srv://Victor:Victor@tasks.oppbq3i.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(url, { serverApi: ServerApiVersion.v1 })

async function run() {
  try {

    await client.connect();
    console.log("Connected successfully to server");

  } catch {

  }
}
run();

module.exports = client