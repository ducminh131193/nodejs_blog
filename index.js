const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/testjs", (req, res) => {
    var a = 2;
    var b = 5;

    var c = a + b;
    var d = 9;
  res.send("Hello World!");
});

// app.post("/minhbeo", (req, res) => {
//     if (req.body.username) {
//         res.status(200).json({
//             success: true,
//             username: req.body.username
//         });
//     } else {
//         res.status(404).json({
//             success: false
//         });
//     }
   
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
