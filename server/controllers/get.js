const axios = require("axios");

const fetchUserController = async (req, res) => {
  let user = req.params.user;

  await axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then((response) => {
      let filteredList = [];

      response.data.forEach(({ name, description, html_url }) => {
        filteredList.push({
          name: name,
          description: description,
          html_url: html_url,
        });
      });

      res.status(200).json({
        message: "Success",
        user,
        results: response.data.length,
        repos: filteredList,
      });
    })
    .catch((err) => {
      res
        .status(err.response.status)
        .json({ message: `Github API says: ${err.response.statusText}` });
    });
};

module.exports = { fetchUserController };
