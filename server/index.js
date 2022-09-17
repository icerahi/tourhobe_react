const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();

const port = process.env.PORT || 5000;
 
//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qcwm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    await client.connect();
    const database = client.db("tour_hobe");
    const tripCollection = database.collection("trips");
    const bookingCollection = database.collection("bookings");
    
    //GET ALL TRIP
    app.get("/trips", async (req, res) => {
      const cursor = tripCollection.find({});
      const trips = await cursor.toArray();
      res.send(trips);
    });
    //GET SINGLE TRIP
    app.get("/trips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const trip = await tripCollection.findOne(query);
      res.send(trip);
    });

    //POST AN BOOKING
    app.post("/booking", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.json(result);
    });

    //GET  MYBOOKING API
    app.get("/mybooking", async (req, res) => {
      const email = req.query.email;
      const filter = { email: email };
      const cursor = bookingCollection.find(filter);
      const result = await cursor.toArray();
      res.send(result);
    });
    //DELETE BOOKING API
    app.delete("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.json(result);
    });

    //GET ALL BOOKING API
    app.get("/allbooking", async (req, res) => {
      const cursor = bookingCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    //UPDATE: Approve Booking
    app.put("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const updateBooking = {
        $set: {
          status: "approved",
        },
      };
      const result = await bookingCollection.updateOne(filter, updateBooking);
      res.json(result);
    });

    //POST: add a New Trip
    app.post("/trips", async (req, res) => {
      const newTrip = req.body;
      const result = await tripCollection.insertOne(newTrip);
      res.json(result);
    });

    /////////////SKIP this section//////////////
    // Mail sender verify unlock key
    keys = database.collection("unlock_keys");

    //verify key
    ///mail_sender/unlock?key=keyyy
    app.get('/mail_sender/unlock',async(req,res)=>{
        const key=req.query.key 
        const filter = {key:key}
        const cursor= keys.find(filter)
        const result = await cursor.toArray();
        all_keys= result.map(keys=> keys.key)
        all_keys.includes(key)?res.status(200).send('success'):res.status(404).send('fail')
    })

    //delete all key
    app.get('/mail_sender/delete',async(req,res)=>{
      const result=await keys.deleteMany({})
      res.send("deleted")
  })
  //add new key
  //mail_sender?add=key
   app.get('/mail_sender',async(req,res)=>{
    const add=req.query.add
    const doc = {
      key: add
    }
    const result = await keys.insertOne(doc);
    res.status(200).send(`added- ${add}`)
  })

  //show all keys
  app.get('/mail_sender/keys',async(req,res)=>{
    const cursor = keys.find({});
    const result = await cursor.toArray();
    res.send(result);
  })



  } finally {
    // await client.close()
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("Backend Server Running on Port:", port);
});
