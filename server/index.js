const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 5000;
require("dotenv").config();

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
