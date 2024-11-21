
const fs = require('fs');
const http = require('http');
const loadash = require('lodash')



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

//   //creating a server
// const server = http.createServer((req,res)=>{  
//     //  console.log(req);//the req parameter is used
//       console.log(req.url, req.method);
      
//   //set header content type
//   res.setHeader('Content-type','text/html') //step 1. change text/plain to text/html
//     //send an html file
//     fs.readFile('/viewing/index.html',(err,data) =>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             // res.write(data);
//             res.end(data);
//         }
//     })
      
// })
  
//   //listening for the server. 
//   server.listen(3030,'localHost',()=>{
//      console.log('server running on port 3030'); 
//       //the server is listening on the port 3030 //type localHost:3030 on addressbar
//   })


//ROUTING

//   //creating a server
// const server = http.createServer((req,res)=>{  
//     //  console.log(req);//the req parameter is used
//       console.log(req.url, req.method);
      
//   //set header content type
//   res.setHeader('Content-type','text/html') 

// //routing
// let path = './viewing/'; 
// switch(req.url){
//     case '/index':
//     path += 'index.html';
//     break;
//     case '/about':
//     path += 'about.html';
//     break;
//     default:
//     path += '404.html';
//     break;
// }



//     //send an html file
//     fs.readFile(path,(err,data) =>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             // res.write(data);
//             res.end(data);
//         }
//     })
      
// })
  
//   //listening for the server. 
//   server.listen(3030,'localHost',()=>{
//      console.log('server running on port 3030'); 
//       //the server is listening on the port 3030 //type localHost:3030 on addressbar
//   })






//STATUS CODES

//  //creating a server
//  const server = http.createServer((req,res)=>{  
//     //  console.log(req);//the req parameter is used
//       console.log(req.url, req.method);
      
//   //set header content type
//   res.setHeader('Content-type','text/html') 

// //routing
// let path = './viewing/'; 
// switch(req.url){
//     case '/index':
//     path += 'index.html';
//     res.statusCode = 200;
//     break;
//     case '/about':
//     path += 'about.html';
//     res.statusCode = 200;
//     break;
//     default:
//     path += '404.html';
//     res.statusCode = 404;
//     break;
// }

//     //send an html file
//     fs.readFile(path,(err,data) =>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             // res.write(data);
//             res.end(data);
//         }
//     })
      
// })
  
//   //listening for the server. 
//   server.listen(3030,'localHost',()=>{
//      console.log('server running on port 3030'); 
//       //the server is listening on the port 3030 //type localHost:3030 on addressbar
//   })



//WORKING WITH REDIRECTS


//  //creating a server
//  const server = http.createServer((req,res)=>{  
//     //  console.log(req);//the req parameter is used
//       console.log(req.url, req.method);
      
//   //set header content type
//   res.setHeader('Content-type','text/html') 

// //routing
// let path = './viewing/'; 
// switch(req.url){
//     case '/index':
//     path += 'index.html';
//     res.statusCode = 200;
//     break;
//     case '/about':
//     path += 'about.html';
//     res.statusCode = 200;
//     break;
//     //here we want to redirect ./about-me to ./about
//     case '/about-me':
//         // path += 'about.html'; we exclude this 
//         res.statusCode = 301;//change the status code to reflect the redirect
//         res.setHeader('Location','/about');//set the new location
//         res.end()
//         break;
//     default:
//     path += '404.html';
//     res.statusCode = 404;
//     break;
// }

//     //send an html file
//     fs.readFile(path,(err,data) =>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             // res.write(data);
//             res.end(data);
//         }
//     })
      
// })
  
//   //listening for the server. 
//   server.listen(3030,'localHost',()=>{
//      console.log('server running on port 3030'); 
//       //the server is listening on the port 3030 //type localHost:3030 on addressbar
//   }) 


//WORKING WITH LOADASH


 //creating a server
 const server = http.createServer((req,res)=>{  
   

    //LODASH
    const num = _.random(0, 20);
    console.log(num)
      
  //set header content type
  res.setHeader('Content-type','text/html') 

//routing
let path = './viewing/'; 
switch(req.url){
    case '/index':
    path += 'index.html';
    res.statusCode = 200;
    break;
    case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
    //here we want to redirect ./about-me to ./about
    case '/about-me':
        // path += 'about.html'; we exclude this 
        res.statusCode = 301;//change the status code to reflect the redirect
        res.setHeader('Location','/about');//set the new location
        res.end()
        break;
    default:
    path += '404.html';
    res.statusCode = 404;
    break;
}

    //send an html file
    fs.readFile(path,(err,data) =>{
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