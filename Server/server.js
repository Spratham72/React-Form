const jsonServer=require('json-server');
const path=require('path');
const server=jsonServer.create();
const router=jsonServer.router(path.join(__dirname,'db.json'))
const middlewares=jsonServer.defaults()
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api',router);
server.listen(1234,()=>{
    console.log('Server is live on port 1234');
})