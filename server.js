const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
    static: './dist',
});
const PORT = process.env.PORT || 3000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        '/birthdays*': '',
    })
);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running');
});