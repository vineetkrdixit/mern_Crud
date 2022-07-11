const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://cruddetails:qwertyuiop@crud.xva9xqm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Error in connecting to DB");
  });

const connection = mongoose.connection;
const CrudDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  Eid: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
const CRUDDETAIL = connection.model("cruddetail", CrudDetails);

app.post("/adddetail", async (req, res) => {
  try {
    if (
      !req.body.name &&
      !req.body.salary &&
      !req.body.Eid &&
      !req.body.dob &&
      !req.body.gender
    ) {
      res.json({ message: "Please fill all the details" });
    } else {
      const values = await new CRUDDETAIL(req.body);
      console.log("values", values);

      values.save((err) => {
        if (err) {
          console.log("Error");
        } else {
          console.log("Saved to Database");
        }
      });
    }
  } catch (error) {}
});

app.get("/getdetail", async (req, res) => {
  try {
    const detail = await CRUDDETAIL.find({}, (err, result) => {
      if (!result) {
        res.json({ message: "cant find any details" });
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    // res.json({ message: "Error in Fetching data" });
  }
});

app.delete(`/delete/:id`, async (req, res) => {
  // console.log(id);
  const { id } = req.params;
  console.log("id", id);

  CRUDDETAIL.findByIdAndDelete({ _id: id }, (err, result) => {
    if (result) {
      console.log("result", result);
    }
  });
  // CRUDDETAIL.deleteOne({}, (err, result) => {
  //   if (err) {
  //     console.log("Data Not Deleted");
  //   } else {
  //     console.log("Data Deleted");
  //     console.log("result", result);
  //   }
  // });
});

// app.put("/update", async (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("Server has been started at port no ", process.env.PORT);
});
