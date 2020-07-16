const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.get('/home', (req, res)=>{
      res.send({where:'Home Page'});
  })
};