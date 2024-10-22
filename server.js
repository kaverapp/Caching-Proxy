const yargs=require("yargs");
const serverCachingProxy=require("./index");

yargs
  .command(`start`,
    "starting the server",
    {
      port:{
        alias:"p",
        describe:"",
        demandOption:true,
        type:"number",
        default:8080,
      },
      origin:{
        alias:"o",
        describe:"",
        demandOption:true,
        type:"text",
        default:8000,
      },
    },
    (argv)=>{
      const {port,origin}=argv;
      console.log("started",port,origin);
      let proxy=new serverCachingProxy(port,origin)
      
      proxy.start();
      
    }
                                       
          )
          .argv;
