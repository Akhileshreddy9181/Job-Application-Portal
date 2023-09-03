const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "jobportal"

// routes
var testAPIRouter = require("./routes/testAPI");
var ApplicantRouter = require("./routes/Applicant");
var ApplicationRouter = require("./routes/Application");
var RecruiterRouter = require("./routes/Recruiter");
var JobRouter = require("./routes/Job");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://db_user:db_pass@mongodb:27017/' + DB_NAME,
 { useNewUrlParser: true },
 { useFindAndModify: false },
 { useUnifiedTopology: true },
 );
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/applicant", ApplicantRouter);
app.use("/job", JobRouter);
app.use("/recruiter",RecruiterRouter);
app.use("/application",ApplicationRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
