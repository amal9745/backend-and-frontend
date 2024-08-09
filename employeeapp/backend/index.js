//1. import
express = require('express')
var cors=require('cors')
require('./connection')
const employeeModel =require('./model/employee')
// 2.initialize
var app = express()

// mid
app.use(express.json());
app.use(cors())
// 3.api creation
app.get('/', (req, res) => {
    res.send("messge from server")
})
app.get('/trial', (req, res) => {
    res.send("this is a trial message")
})
// api to add data to db
app.post('/add', async (req, res) => {
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
})
// api to view  data to db
app.get('/view', async (req, res) => {
    let result = await employeeModel.find();
    res.json(result);
})

// 4.port setting
app.listen(3004, () => {
    console.log('listening on port 3004')
})
