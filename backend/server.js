const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');


require("dotenv").config();
// const Job = require("./models/Job");

const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(express.json()); //middlewqre
app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);


//databbase 
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MOngo DB coonected");
    })
    .catch((err)=>{
        console.log(err);        
    })





    //route

app.use("/jobs", jobRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`);
    
});

// app.post("/jobs", async (req, res)=>{

//     try{
//         const job = await Job.create(req.body);
//         res.status(201).json(job)
//     }
//     catch (err) {
//         res.status(400).json({error: err.message});
//     }
// });

// app.get("/jobs", async (req,res)=>{
//     const jobs = await Job.find();
//     res.json(jobs);
// });

// Job.deleteMany({});
