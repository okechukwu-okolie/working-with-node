


const fs = require('fs')

//READING FILES
// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
    
// })
// let int = setInterval(()=>{
//     console.log('last');
//     clearInterval(int)
// },4000)

//WRITING FILES and CREATING THE FILE
// fs.writeFile('./docs/blo.txt','this is the written content of the file',()=>{
    
//     console.log('file has been written');
// })


//MAKING A DIRECTORY
//the existSync method verifies that a folder doesnt exist before creating it.
// if(!fs.existsSync('./assets')){
    
//     fs.mkdir('./assets',(err)=>{
       
//         if(err){
//             console.log(err);
//         }
//         console.log('directory has been created');
//     })
// }else{//the fs.rmdir deletes the directory
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('directory has been deleted')
//     })
// }

//DELETING FILES
if(fs.existsSync('./deleteMe.txt')){
    fs.unlink('./deleteMe.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}
    
    





