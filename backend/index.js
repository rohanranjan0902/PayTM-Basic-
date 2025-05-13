const express =  require("express");
const cors = require("cors");

//const mainRouter =  require("./Routes/index");

const app  = express();

app.use(cors());
app.use(express.json());

const mainRouter = require("./Router/index");


app.use("/api/v1", mainRouter);// all request that are coming to /api/v1 goes to mainRouter;
app.listen(3000);