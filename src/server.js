import  express  from "express";
const PORT = 4000;
const app = express();


const handleHome = (req, res) =>{
    return res.end()

} 
const handleLogin = (req, res) =>{
    return res.send("<h1>Login here</h1>")
}

app.get("/",handleHome)
app.get("/login", handleLogin)


const handleListening = (req, res) => console.log(`Server listening on prot http://localhost:${PORT}`);
app.listen(PORT, handleListening)
