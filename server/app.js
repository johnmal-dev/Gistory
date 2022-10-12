const express = require('express');
const app = express();
const axios = require('axios');

const es6John = async () => {
  const user = await axios
    .get(`https://api.github.com/users/Medic1111/repos`)
    .then((response) => {
      const list = response.data;
      list.forEach(({ name, description, html_url }) => {
        console.log(name, description, html_url);
      });
    })
    .catch((err) => console.log(err));
};

es6John();

app.listen(3002, () => {
  console.log('Server is running');
});
