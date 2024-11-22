
const express = require('express')//imporrting expres
const morgan = require('morgan')
//assigning the express function to a variable
const app = express();





//listen for request
app.listen(3000,()=>{
    console.log('listening on port 3000')
});



//WORKING WITH MIDDLE WARE*****************************************


// app.use((req,res,next)=>{
// console.log('new request made');
// console.log('host:',req.hostname);
// console.log('path:',req.path);
// console.log('method:',req.method);
// next()//this function allows the middle ware to move to the next function or operaton. noticed that its added as a parameter in the use function
// })

//WORKING WITH THIRD PARTY MIDDLEWARE*****************************

app.use(morgan('dev'))
app.use(morgan('tiny'))
app.use(morgan('short'))
app.use(morgan('common'))

//static middle ware

app.use(express.static('public'))











//listening to a get request
// app.get('/',(req,res)=>{

//     res.send('<h1>Home Page</h1>')
// })

//ROUTING with HTML pages


// app.get('/index',(req,res)=>{

//     // res.send('<h1>Home Page</h1>')
//     res.sendFile('./viewing/index.html',{root:__dirname})
// })

// app.get('/about',(req,res)=>{

//     // res.send('<h1>Home Page</h1>')
//     res.sendFile('./viewing/about.html',{root:__dirname})
// })

// app.get('/contact',(req,res)=>{

//     // res.send('<h1>Home Page</h1>')
//     res.sendFile('./viewing/contact.html', {root:__dirname})
// })




// //REDIRECTS AND 404
// //redirect
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })

// app.get('/contact-us',(req,res)=>{
//     res.redirect('/contact')
// })

// //404. this page must go to the end of the routing pages

// app.use((req,res)=>{
//     res.status(404).sendFile('./viewing/404.html', {root:__dirname})
//     // res.status(404).send('<h1>Page Not Found</h1>')
// })









// WORKING WITH EJS FRAMEWORK

//ensure to import both express and ejs before commencing
// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.render('index')
// })

// app.get('/about',(req,res)=>{
//     res.render('about')
// })

// app.get('/blogs/create',(req,res)=>{

//   res.render('create')
// })






// //REDIRECTS AND 404

// app.get('/blogs.create',(req,res)=>{
//     res.render('create')
// })
 


// app.get('/404',(req,res)=>{
//     res.status(404).render('404')
// })



// //PASSING DATA INTO VIEWS 

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const blogs = [
        {title:'yoshi finds eggs',snippet:'this is the text with the title'},
        {title:'mario finds eggs',snippet:'this is the text with the title'},
        {title:'chunn-li finds eggs',snippet:'this is the text with the title'}
    ]
    res.render('index', {title:'Home',blogs})
})

app.get('/about',(req,res)=>{
    res.render('about', {title:'About'})
})

app.get('/blogs/create',(req,res)=>{

  res.render('create',{title:'create a new blog'})
})


// app.get('/blogs.create',(req,res)=>{
//     res.render('create')
// })
 
app.get('/404',(req,res)=>{
    res.status(404).render('404',{title:'404'})
})

