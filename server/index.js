const app = require("express");
const router = require("./routes/mainRoute");


app.use(express.json());
app.use(cors());
app.use("/api", router);


app.listen(3000);
