const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

// const db = require("./models");

//routers
// const userRouter = require("./routes/Users");
// const doctorRouter = require("./routes/Doctors");
// const scheduleRouter = require("./routes/Schedule");
// const specRouter = require("./routes/Specialization");
// const servicesRouter = require("./routes/Services");

// // use routers
// app.use("/users", userRouter);
// app.use("/doctors", doctorRouter);
// app.use("/schedule", scheduleRouter);
// app.use("/specialization", specRouter);
// app.use("/services", servicesRouter);

// db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, "0.0.0.0", (res, req, next) => {
    console.log("running at PORT:", 5000);
  });
// });
