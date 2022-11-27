import  express  from "express";
const PORT = 4000;
const app = express();




const handleHome = (req, res) =>{
    return res.send("<h1>i love middlewares</h1>")
} 


app.get("/", handleHome);


const handleListening = (req, res) => console.log(`Server listening on prot http://localhost:${PORT}😍`);
app.listen(PORT, handleListening)
