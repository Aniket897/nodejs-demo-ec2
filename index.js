const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, resp) => {
  resp.status(200).json({
    message: "Hello from Ec2 nodejs server",
  });
});

app.get("/health" , (req , resp) => {
  resp.status(200).json({
    message: "Server is up and running",
  });
}

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
