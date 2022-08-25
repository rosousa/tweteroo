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
  const image = users.find((value) => req.body.username === value.username);
  const tweet = { ...req.body, avatar: image.avatar };
  tweets.push(tweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const data = tweets.slice(-10);
  res.send(data);
});

app.listen(5000);
