const express = require("express");
const connectDB = require("../config/db");
const Person = require("./Models/person");

const app = express();
const port = 3000;

app.use(express.json());


(async () => {
 await connectDB();
})();




app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Create a new person
app.post("/persons", async (req, res) => {
   
    const { name, age, email } = req.body;
    const newperson = new Person({ name, age, email });
    await newperson.save();
    console.log("Person saved:", newperson);
    res.json({ message: "Person created successfully", person: newperson });
});

// Updating data in MongoDB
app.put("/persons", async (req, res) => {
   
    const { name, age, email } = req.body;
   const personData = await Person.findOne({ email });


   //const { id} = req.body;
   //const personData = await Person.findByIdAndUpdate(id,{age:'30'},{new:true});  update by id
   console.log("Person found for update:", personData);
    res.json({ message: "Person created successfully", person: newperson });
});


//deteleting data in Mongodb
app.delete("/persons/:id", async (req, res) => {
    const { id} = req.params;
    const deletedPerson = await Person.findByIdAndDelete(id);
    console.log("Person deleted:", deletedPerson);
    res.json({ message: "Person deleted successfully", person: deletedPerson });
});

// Get all persons
app.get("/persons", async (req, res) => {
    const persons =  await Person.find();
    res.json(persons);
}); 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
