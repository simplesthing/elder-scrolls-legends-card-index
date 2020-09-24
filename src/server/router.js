const reactApp = require("./handlers/react-app/index");

module.exports = (app) => {
  const react = reactApp(app);

  app.use("/", react);
};
