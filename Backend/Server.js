import express from "express"
import session from "express-session"
import bodyParser from "body-parser"
import bcrypt from 'bcrypt'
import cors from 'cors';
import { db } from "./DB_Configs/index.js";
import { UserList } from "./DB_Configs/Schema.js";
import { eq } from "drizzle-orm";

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


app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, gender, dob, address, contact, email, passport, password, imageUrl } = req.body;

  try {
    const existingUser = await db.select().from(UserList).where(eq(UserList.email, email));
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedpwd = await bcrypt.hash(password, 10);
    const result = await db.insert(UserList).values({
      firstName,
      lastName,
      gender,
      dob,
      address,
      contact,
      email,
      passport,
      password: hashedpwd,
      imageUrl
    }).execute();

    console.log('Insert result:', result);
    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.log("Error in Register", err);
    return res.status(500).json({ message: "Registration Failed" });
  }
});

app.post("/api/auth/login", async(req,res) => {
    const {email,password} = req.body
    try{
      const user = await db.select().from(UserList).where(eq(UserList.email, email));
      if(user.length == 0){
        return res.status(401).json({message:"Invalid Username or password",authenticated:false})
      }
      const isPasswordValid = await bcrypt.compare(password,user[0].password)
      if(!isPasswordValid){
        return res.status(401).json({message:"Invalid Email or Password",authenticated:false})
      }
      req.session.authenticated = true
      res.status(200).json({message:"Authenticated",authenticated:true})
    }catch(err){
      console.log("There is an error in Log In")
      res.status(500).json({ message: "Login failed" });
    }
    // if(email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD){
    //     req.session.authenticated = true
    //     return res.status(200).json({
    //         message : "Authenticated",
    //         authenticated : true
    //     })
    // }
    // return res.status(401).json({
    //     message: "Invalid email or password",
    //     authenticated:false
    // })
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