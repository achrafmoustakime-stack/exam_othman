const express = require("express");

const app =express();

const port = 3000;
app.get("/api/health",(req,res)=>

{
    res.send(" renvoie un JSON confirmant que le serveur répond")
    })

app.get("/api/health",(req,res)=>

{
    res.send("confirmant que le serveur répond")
    })

app.get("/api/items",(req,res)=>

{
    res.send("une liste JSON d’éléments de démonstration ou les éléments lus en base")
    })

app.listen(port,()=>

{

    console.log("sever a demarrer sur le port "+port)
})

