import express from "express"

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Server is ready to serve</h1>")
})

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`)
})

