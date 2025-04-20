const express = require("express");
const routers = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "public" });
const client = require("./mogodb");
const ObjectId = require("mongodb");
const { count } = require("console");

//routing
routers.get("/users", async (req, res) => {
  try {
    const db = client.db("latihan");
    const users = await db.collection("users").find().toArray();
    res.json({
      status: "success",
      message: "list users",
      data: users,
    });
  } catch {
    error;
  }
  {
    res.json({
      status: "error",
    });
    f;
  }
});

// get single users
routers.get("/users/:id", async (req, res) => {
  try {
    const db = client.db("latihan");
    const user = await db.collection("users").findOne({
      _id: new ObjectId(req.params.id),
    });
    res.status(200).json({
      status: "success",
      message: "user found",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
//insert user
routers.post("/users", async (req, res) => {
  try {
    const db = client.db("latihan");
    const user = await db.collection("users").insertOne(req.body);
    res.status(201).json({
      status: "success",
      message: "user created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
//update users
routers.put("/users/:id", async (req, res) => {
  try {
    const db = client.db("latihan");
    const user = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    res.status(200).json({
      status: "success",
      message: "user updated",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
//delete users
routers.delete("/users/:id", async (req, res) => {
  try {
    const db = client.db("latihan");
    const user = await db.collection("users").deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.status(200).json({
      status: "success",
      message: "user deleted",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
//Get orders users
routers.get("/users-with-orders", async (req, res) => {
  try {
    const db = client.db("latihan");
    const usersWithOrders = await db
      .collection("users")
      .aggregate([
        {
          $lookup: {
            from: "orders", // The collection to join with
            localField: "_id", // The field from the `users` collection
            foreignField: "userId", // The field from the `orders` collection
            as: "orders", // The name of the resulting array field
          },
        },
      ])
      .toArray();

    res.status(200).json({
      status: "success",
      message: "Users with their orders retrieved successfully",
      data: usersWithOrders,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
// routers.post("/upload", upload.single("file"), (req, res) => {
//   const file = req.file;

//   if (file) {
//     const target = path.join(__dirname, "public", file.originalname);
//     fs.renameSync(file.path, target);
//     res.send("File berhasil diupload");
//   } else {
//     res.status(400).send("File gagal diupload");
//   }
// });
// routers.get("/download", (req, res) => {
//   const filename = "logo.png";
//   res.download(path.join(__dirname, "/download/", filename), "logo-photo.png");
// });
//get single user

// routers.get("/users/:id", async (req, res) => {
//   try {
//     const db = client.db("latihan");
//     const user = await db.collection("users").findOne({
//       _id: new ObjectId(req.params.id),
//     });
//     res.status({
//       status: "success",
//       massage: "single users",
//       data: users,
//     });
//   } catch (error) {}
// });
// routers.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   res.status(200).json({
//     status: "success",
//     message: "Login page",
//     data: {
//       username: username,
//       password: password,
//     },
//   });
// });
// routers.get("/", (req, res) => res.send("Hello World"));
// routers.get("/about", (req, res) =>
//   res.status(200).json({
//     status: "success",
//     message: "About page",
//     data: [],
//   })
// );
// routers.post("/contoh", (req, res) => res.send("request method POST"));
// routers.put("/contoh", (req, res) => res.send("Request method PUT"));
// routers.delete("/contoh", (req, res) => res.send("Request method DELETE"));
// routers.patch("/contoh", (req, res) => res.send("Request method PATCH"));
// routers.all("/universal", (req, res) =>
//   res.send(`Request method ${req.method}`)
// );
// // Routing dinamis
// // 1. Menggunakan params
// routers.get("/post/:id", (req, res) =>
//   res.send(`Artikel ke - ${req.params.id}`)
// );
// // 2. Menggunakan Query String
// routers.get("/post", (req, res) => {
//   const { page, sort } = req.query;
//   res.send(`Query string= page :${page}, sort : ${sort}`);
// });

module.exports = routers;
