import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Server is ready Bro</h1>")
})

app.get("/api/jokes", (req, res) => {
    res.send(
        [
            {
                id: 1,
                title: "joke1",
                content: "I am joke no. 1"
            },
            {
                id: 2,
                title: "joke2",
                content: "I am joke no. 2"
            },
            {
                id: 3,
                title: "joke3",
                content: "I am joke no. 3"
            },
            {
                id: 4,
                title: "joke4",
                content: "I am joke no. 4"
            },
            {
                id: 5,
                title: "joke5",
                content: "I am joke no. 5"
            }
        ]
    )
})

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`)
})

