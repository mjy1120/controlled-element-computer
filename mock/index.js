module.exports=function(app){
    app.get("/api/login",function(req,res,next){
        res.send("123")
    })
}