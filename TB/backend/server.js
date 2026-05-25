import express from "express";

const app = express();

//this is our route
app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 20 notes ");
});

app.post("/app/notes",(req,res)=>{
    res.status(201).json({message:"post created successfully!"})
})
app.put("/app/notes/:id",(req,res)=>{
    res.status(200).json({message:" updated successfully!"})
})
app.delete("/app/notes",(req,res)=>{
    res.status(200).json({message:"post created successfully!"})
})

app.listen(5001, () => {
    console.log("Server running on port 5001");
}) 