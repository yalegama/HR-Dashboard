const express=require('express');
const app=express();
const bodyparse=require('body-parser');
const cors=require('cors');
const mysql=require('mysql');
const PORT=process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyparse.urlencoded({extended:true}));

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'hrdashboard'
})


app.get('/addeto',(req,res)=>{
    const value=req.body.value;
    const test=("INSERT INTO test(area) VALUES ('Team - 02 - A - SY')");
    db.query(test,[value],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})


app.listen(PORT,(req,res)=>{
    console.log(`Server is started on ${PORT}`);
});
