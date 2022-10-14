const axios = require("axios");

const fetchUserController = async (req, res) => {
  let user = req.params.user;

  await axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then((response) => {
      let data = response.data[0].owner;

      let owner = {
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
      };

      let repos = [];

      response.data.forEach(
        ({ name, description, html_url, created_at, updated_at }) => {
          repos.push({
            name,
            description,
            html_url,
            created_at,
            updated_at,
          });
        }
      );

      res.status(200).json({
        message: "Success",
        results: response.data.length,
        owner,
        repos,
      });
    })
    .catch((err) => {
      res
        .status(err.response.status)
        .json({ message: `Github API says: ${err.response.statusText}` });
    });
};

module.exports = { fetchUserController };
