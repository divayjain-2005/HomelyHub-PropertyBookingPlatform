import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./utils/db.js";
import { router } from "./routes/userRoutes.js"
import { propertyRouter } from "./routes/propertyRouter.js";
import { bookingRouter } from "./routes/bookingRouter.js";
import { tripRouter } from "./routes/tripRouter.js";

dotenv.config();

const app = express();
//express.josn (this is our first middleware)   by default express takes limit 100kb only but we need to share more than that in our project
app.use(express.json({ limit: "100mb" }))

// urlencoded    2nd middleware(translater)
app.use(express.urlencoded({ limit: "100mb", extended: true }))

// cookieParser  this is the 3rd middleware
app.use(cookieParser())


app.use(cors({
    origin:process.env.ORIGIN_ACCESS_URL,
    credentials:true
}))


const port = process.env.PORT;

// test Route
app.get("/", (req, res) => {
    res.send("HomelyHub is running");
})

app.use("/api/v1/rent/user", router)
app.use("/api/v1/rent/listing", propertyRouter)
app.use("/api/v1/rent/user/booking", bookingRouter)
app.use("/api/v1/rent/trip", tripRouter)



connectDb();

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})