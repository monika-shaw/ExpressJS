// //2
// const express = require('express');
//  const app=express();
//  const port = 8000;

//  app.get('/',(req,res)=>{
//      res.send("Welcome to my home page")
//  });

//  app.get('/about',(req,res)=>{
//     res.send("Welcome to my about page")
// });

// app.get('/contact',(req,res)=>{
//     res.send("Welcome to my contact page")
// });


// app.listen(port,()=>{
//     console.log(`listening to the port number ${port}`);
// })

//3
const express = require('express');
 const app=express();
 const port = 8000;

 app.get('/',(req,res)=>{
     res.write("<h1>welcme to my home page</h1>")
     res.write("<h1>welcme to my home page</h1>")
     res.send()
 });

 app.get('/about',(req,res)=>{
    res.send("Welcome to my about page")
});

app.get('/contact',(req,res)=>{
    res.send("Welcome to my contact page")
});

// app.get('/temp',(req,res)=>{
//     res.send([{
//         id:1,
//         name :"tom",
//     },
//     {
//         id:1,
//         name :"tom",
//     },
// ]);
// });

// or

app.get('/temp',(req,res)=>{
    res.json([{
        id:1,
        name :"tom",
    },
    {
        id:1,
        name :"tom",
    },
]);
});
app.listen(port,()=>{
    console.log(`listening to the port number ${port}`);
})