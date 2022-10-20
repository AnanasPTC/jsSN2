import{ essaie } from 'classebdd.js';
var express = require("express");
var app = express();

console.log(essaie)

app.set('view engine', 'ejs');

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://edart22023:GFkTVpHjWfYWee1A@cluster0.pdkz1wb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);



app.get('/joueur', function(req, res) 
{
    player(res);  
});
async function player(res) 
{
    //let test = new joueur(5,hugo,10,1,1084);
    try 
    {
        const database = client.db('edart');
        const edart = database.collection('joueur');
     
    

    await edart.insertOne({
        test
    });
        res.render('pages/joueur')
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
  }


app.listen(8080);
console.log('8080 is the magic port');