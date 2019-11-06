module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                let data=require('./mock/list.json')
                res.send({
                    values:data
                })
            })
        }
    }
    
}