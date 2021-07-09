
const app = require('./app.js')
const port   = 3000;

app.listen(port, function (req,res){
    console.log('Server listening at port ' + port);
})


