
const fs = require('fs');
const http = require('http');



// //creating a server
// const server = http.createServer((req,res)=>{  
//      console.log('request made');
     
// })

// //listening for the server. 
// server.listen(3030,'localHost',()=>{
//     console.log('server running on port 3030');  //the server is listening on the port 3030 //type localHost:3030 on addressbar
//  })


//WORKING WITH REQUEST

// //creating a server
// const server = http.createServer((req,res)=>{  
//   //  console.log(req);//the req parameter is used
//     console.log(req.url, req.method);
    

    
// })

// //listening for the server. 
// server.listen(3030,'localHost',()=>{
//    console.log('server running on port 3030');  //the server is listening on the port 3030 //type localHost:3030 on addressbar
// })

//WORKING WITH RESPONSE

// //creating a server
// const server = http.createServer((req,res)=>{  
//     //  console.log(req);//the req parameter is used
//       console.log(req.url, req.method);
      
//   //set header content type
//   res.setHeader('Content-type','text/html') //step 1. change text/plain to text/html
//   res.write('<h1>this is a response</h1>')
// //   res.write('this is a response')//step 2
//   res.end()//step 3
      
//   })
  
//   //listening for the server. 
//   server.listen(3030,'localHost',()=>{
//      console.log('server running on port 3030');  //the server is listening on the port 3030 //type localHost:3030 on addressbar
//   })



  //ADDING EXTERNAL HTML

  //creating a server
const server = http.createServer((req,res)=>{  
    //  console.log(req);//the req parameter is used
      console.log(req.url, req.method);
      
  //set header content type
  res.setHeader('Content-type','text/html') //step 1. change text/plain to text/html
    //send an html file
    fs.readFile('/viewing/index.html',(err,data) =>{
        if(err){
            console.log(err);
            res.end()
        }else{
            // res.write(data);
            res.end(data);
        }
    })
      
})
  
  //listening for the server. 
  server.listen(3030,'localHost',()=>{
     console.log('server running on port 3030'); 
      //the server is listening on the port 3030 //type localHost:3030 on addressbar
  })
