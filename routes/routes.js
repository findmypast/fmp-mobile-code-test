const profileRoutes = require('./profiles');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });
  profileRoutes(app, fs);
};

module.exports = appRouter;
