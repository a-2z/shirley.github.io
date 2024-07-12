const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const friendsData = require("./src/data/friendsData");

  friendsData.forEach(friend => {
    createPage({
      path: `/notes/${friend.name}`,
      component: path.resolve("./src/pages/notes.js"),
      context: {
        friendName: friend.name,
      },
    });
  });
};
