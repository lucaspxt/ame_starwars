module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.home.welcome(application, req, res);
    });
}