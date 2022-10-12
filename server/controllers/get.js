const axios = require("axios");

const fetchUserController = async (req, res) => {
  let user = req.params.user;

  await axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then((response) => {
      let owner = {
        login: response.data[0].owner.login,
        avatar_url: response.data[0].owner.avatar_url,
        html_url: response.data[0].owner.html_url,
      };

      let filteredList = [];

      response.data.forEach(
        ({ name, description, html_url, created_at, updated_at }) => {
          filteredList.push({
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
