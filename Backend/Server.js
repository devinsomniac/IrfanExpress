import express from "express"
import session from "express-session"
import bodyParser from "body-parser"
// import { authenticate } from "passport"
import cors from 'cors';

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(
  cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true, 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  })
);


  app.use(session({
    secret: "HelloWorldInzamam",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,  
      httpOnly: true, 
      sameSite: 'lax', 
    }
  }));
  
const DEFAULT_EMAIL = 'test@example.com';
const DEFAULT_PASSWORD = 'password123';


app.post("/api/auth/login", (req,res) => {
    const {email,password} = req.body
    if(email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD){
        req.session.authenticated = true
        return res.status(200).json({
            message : "Authenticated",
            authenticated : true
        })
    }
    return res.status(401).json({
        message: "Invalid email or password",
        authenticated:false
    })
})

app.get('/api/auth/check', (req, res) => {
    if (req.session.authenticated) {
        return res.status(200).json({ authenticated: true });
    }
    return res.status(200).json({ authenticated: false });
});
app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to log out' });
        }
        return res.status(200).json({ message: 'Logged out successfully' });
    });
});

app.post("/api/register",(req,res) => {
  console.log(req.body);

  // Send a success response back to the client
  res.send({ message: "Form data received successfully", formData: req.body });
  
})



app.listen(port,()=>{
    console.log(`The App is listening to post ${port}`)
})