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
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'OPTIONS'], // Allow these methods
    credentials: true, // Enable credentials (cookies, sessions)
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow required headers
  })
);


  app.use(session({
    secret: "HelloWorldInzamam",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,  // Should be false during development (since we're using http, not https)
      httpOnly: true, // Makes the cookie inaccessible via JavaScript (for security)
      sameSite: 'lax', // Allows the cookie to be sent with cross-origin requests
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



app.listen(port,()=>{
    console.log(`The App is listening to post ${port}`)
})