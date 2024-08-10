const express = require("express")
const dbConnection = require("./DbConnection/dbConnection");
const routers = require("./mvc/Routers/routes");
const cors = require("cors");
// import dbConnection from "./DbConnection/dbConnection";

const corsOptions = {
    origin : "https://peppy-choux-4dcc76.netlify.app",
    Credential : true
}
const app = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use("/add",routers);
app.use("/get",routers);
app.use("/data",routers);
app.use("/user",routers);

dbConnection();

app.listen(10000,()=>{
   console.log("server is connected at port : 10000 !!!")
})