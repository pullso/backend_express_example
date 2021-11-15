import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload"

const PORT = 5000
const DB_URL = 'mongodb+srv://user:3ZP7on08oS2571BR@cluster0.3byin.mongodb.net/Posts?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
      .then(() => console.log('DB_CONNECT'))
      .catch(err => console.log(err, `: DB_err`))
    app.listen(PORT, () => console.log(`Server started`))
  } catch (e) {
    console.log(e)
  }
}

await startApp()
