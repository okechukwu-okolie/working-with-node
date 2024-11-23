const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt',{encoding:'utf8'}) 
const writeStream = fs.createWriteStream('./docs/blogs.txt')
// readStream.on('data',(chunk)=>{
//     console.log('\n \n\n..........NEW CHUNK......\n\n\n')
//     console.log(chunk)
//     writeStream.write('..........NEW CHUNK......')
//     writeStream.write(chunk)
// })

//PIPING
readStream.pipe(writeStream )