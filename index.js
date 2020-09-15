const express = require('express');
const Metrics = require('./metrics')

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json())

app.post("/metric/:namespace", (req, res) => {
  const { namespace } = req.params;
  const { value } = req.body;

  if(typeof value !== "number"){
    res.status(400).json({ error: "Endpoint expects a value." });
    return;
  }

  Metrics.insert(namespace, value);

  res.status(201).json({});
})

app.get("/metric/:namespace", (req, res) => {
  const { namespace } = req.params;

  const sum = Metrics.get(namespace);

  if(sum === undefined){
    res.status(404).json({ error: `Metrics for ${namespace} not found.`});
    return;
  }

  res.json({ value: sum });
})

/* Catch 400 (bad input) for metric route */
app.use("/metric/*", (req, res) => {
  res.status(400).json({ error: "Parameter :key is required" })
})

/* Catch-all in order to serve 404 as JSON also. */
app.use("*", (req, res) => {
  res.status(404).json({ error: `Could not find resource for ${req.method}: ${req.path}` })
})

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`)
})