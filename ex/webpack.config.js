const webpack=require(webpack)
module.exports={
    _entry: "./ex./public/index.js",
    output:{
        path:__dirname+"/public",
        filename:"./bundle.js"
    },
    
devserver:{
port:8080,
contentbase:"./public"
}
}