import app from "./app.js";

const PORT = 4000 || process.env.PORT

app.listen(4000, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})