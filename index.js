const express=require("express");
const Nodecache=require("node-cache");
const axios=require("axios");

class serverCachingProxy{
    constructor(port,origin){
        this.port=port;
        this.origin=origin;
        this.cache=new Nodecache({stdTTL:3200});
        this.app=express();
    }

    async handleRequest(req,res){
       
        const url = `${this.origin}${req.originalUrl}`;
        console.log(url);
        const cachedResponse=this.cache.get(url);
        console.log(cachedResponse);

        if (cachedResponse) {
            console.log("Cache hit--> fetching from temperoary cache.");
            res.setHeader("X-Cache", "HIT");
            return res.status(200).send(cachedResponse);
        
        }
       try {
        console.log("Cache miss --->fetching from server");
        const hunt=await axios.get(url);
        const response= hunt.data;
        this.cache.set(url,response)
        res.setHeader("X-cache","MISS");
        res.status(200).send(response);

       } catch (error) {
        console.error("Error fetching data:", error.message);
            res.status(500).send("An error occurred while fetching the data.");
       }
        
        
        

    }
    
    start(){
        this.app.get("*",this.handleRequest.bind(this));
        this.app.listen(this.port,()=>{
            console.log("server started",this.port);
        })
    }

    
}

module.exports=serverCachingProxy;