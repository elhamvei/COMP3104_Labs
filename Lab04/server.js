var express = require("express")

let app = express()
const SERVER_PORT = 8088

//app.use('/static', express.static("views"))
app.use('/static', express.static("views"))


app.get("/", (req, res) =>{
    res.send("<h1>Welcome to Express Server</h1>")
})

app.post("/", (req, res) =>{
res.send("<h1>POST- Welcome to express server </h1>")
})

app.get("/hello", (req, res =>{
    res.send("Hello, Elham")
}))


app.post("/student", (req, res) =>{
    let stud = {
        sid: 1,
        first_name: "Elham",
        last_name: "Veisouei"
    }

    slist = [stud, stud, stud]
    //     res.send(stud)
    //    res.send(JSON.stringify(stud))
    // res.JSON(stud)
    //res.json([stud, stud, stud])
    res.json(slist)
})

app.post("/api/professor/:pid/:pfnm/:plnm", (req, res) => {
    const pid = req.params.pid
    const faculty = {
        professor_id: req.params.pid,
        professor_name: req.params.pfnm,
        last_name: req.params.plnm,
        full_name: `${req.params.pfnm} ${req.params.plnm}`,
        dot: Date()
    }
})
res.send(faculty)


app.post("/professor?pid=&", (req, res) =>{
    const pid = req.query.pid

    res.send({...req.query, dot: Date()})
    // if(req.query !== undefined){

    // }

})


app.listen(SERVER_PORT, () =>{
    console.log("Server Runnig at http://localhost:%s/", SERVER_PORT)
})

