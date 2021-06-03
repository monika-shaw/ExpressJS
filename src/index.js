// //1
// const express = require('express');

// const app = express();

// app.get("/", (req, res)=>{
//       res.send("Hello from the express");
// });

// app.get('/about',(req,res)=>{
//     res.send("Hello from the about");

// })

// app.listen(8000,()=>{
//     console.log("Listening the port at 8000");
// })



//4
const path = require('path');
const express = require('express');

const app = express();

// relative absolute
// console.log(__dirname);

// console.log(path.join(__dirname,'../public'));

const staticPath = path.join(__dirname,'../public');


//building a middleware
 app.use(express.static(staticPath));

app.get("/", (req, res)=>{
      res.send("Hello from the express");
});

app.get('/about',(req,res)=>{
    res.send("Hello from the about");

})

app.listen(8000,()=>{
    console.log("Listening the port at 8000");
})



