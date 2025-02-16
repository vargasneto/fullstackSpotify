import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://dbUser:senhaBd@spotify.tu4iw.mongodb.net/?retryWrites=true&w=majority&appName=Spotify";

const client = new MongoClient(URI);

export const db = client.db("spotifyDb");
