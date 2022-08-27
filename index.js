import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const image = users[users.length - 1].avatar;
  const tweet = { ...req.body, avatar: image };
  tweets.push(tweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const data = tweets.slice(-10);
  res.send(data.reverse());
});

app.listen(5000, () => console.log("Server running on port 5000"));
