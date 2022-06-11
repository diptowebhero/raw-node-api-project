//module wrapper
const handler ={};

handler.notFoundRouteHandler = ()=>{
    console.log('Your requested route is not found');
}
//export
module.exports = handler;