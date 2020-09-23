const express = require("express");
const ctrl = require("./controllers");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", ctrl.create);
app.get("/api/messages", ctrl.read);
app.put("/api/messages/:id", ctrl.update);
app.delete("/api/messages/:id", ctrl.delete);

app.listen(3001, () => {
  console.log("server is starting on port 3001");
});
