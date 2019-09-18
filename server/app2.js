var express=require('express');
var app=express()
const sql=require('./sql.js')
app.get('/resgister',(req,res)=>{
    sql.sqlQuery("insert into users(Name,Password) values(?,?)",[33,'test2',678])
        .then(re=>{
            res.end(re)
            //console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
})
app.listen(5000, function () {
    console.log('running 5000...');
});
