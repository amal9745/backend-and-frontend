var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://amalshaji9745:amalshaji@cluster0.8aev9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("connected")
    })
    .catch((err) => {
      console.log(err)
  })