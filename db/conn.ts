import { MongoClient, ServerApiVersion } from "mongodb";

const url = "mongodb+srv://Victor:1234@tasks.cdynvlw.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, { serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } catch {}
}
run();

export default client;
