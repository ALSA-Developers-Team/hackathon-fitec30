module.exports = (app, RouteSection) => {

    app.use(`/${RouteSection}/items`, require('./item.routes.js'));
    app.use(`/${RouteSection}/users`, require('./user.routes'));
    
}