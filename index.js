const express = require('express');
const { Client } = require('discord.js-selfbot-v13');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express app!');
});

app.listen(port, () => {
  console.log('Alx Developer');
});

const client = new Client({
  checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
});

client.login(process.env.token);

let time = 5000;
let ch = "1387112512788365382";

function generate(number) {
  let gg = [];
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?!@#$%^&*()_+=}{[';,./`\\']0123456789";
  string = string.split("");
  for (let k = 0; k < number; k++) {
    gg.push(string[Math.floor(Math.random() * string.length)]);
  }
  return gg.join("");
}

client.on('ready', () => {
  console.log("Done");
  let channel = client.channels.cache.get(ch);
  let i = 0;
  setInterval(() => {
    i++;
    channel.send(`( ${i} ) ${generate(Math.floor(Math.random() * 10))}`);
  }, time);
});