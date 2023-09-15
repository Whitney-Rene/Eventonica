const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica 2023 H2 to your Server for Eventonica");
});

//creates endpoint/route for all events
app.get('/api/events', async (req, res) => {
    
    ///api/events?title=test, creates variable so I can later filter by title 
    const {title} = req.query;
    // console.log(req.query);
    //try is my promise 
    try {
        if(title){
        //server talking to database, please find any title with these search words
        const { rows: events } = await db.query(`SELECT * FROM events WHERE title ILIKE '%${title}%'`); 
        //sever talking to client, send back those events with search words
        res.send(events); 
        } 
        //when user visit home link, show all events or when search bar is empty
        else {
        const { rows: events } = await db.query('SELECT * FROM events');
        // console.log('In the server', events)
        res.send(events);
        }

    } //catch errors
    catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

//creates endpoint/route to post/add events
//why can it be the same route as above?
app.post('/api/events', async (req, res) => {
    try {
        const { title, location, eventtime } = req.body;
        const result = await db.query(
            "INSERT INTO events (title, location, eventtime) VALUES ($1, $2, $3) RETURNING *",
            [title, location, eventtime]
        );
        let dbResponse = result.rows[0];
        console.log(dbResponse)
        res.json(dbResponse);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }

});

//createa route/request to handle edits
//MY ATTEMPT
// app.put('/api/events/:id', async (req, res) => {
// try {
//     const { title, location, eventtime } = req.body;
//     const result = await db.query(
//     `UPDATE event SET title = ${title} WHERE id = ${ id }`
//     //"INSERT INTO events (title, location, eventtime) VALUES ($1, $2, $3) RETURNING *",
//     // [title, location, eventtime]
//     // (postsql command: UPDATE events SET title = `${}` WHERE id = 1;)
//     )
//         res.status(200).send('Event successfully updated.')
// }
//     catch (error) {
//        console.log('Event does not exist')
// }
// })


//creates endpoint/route to delete events
app.delete('/api/events/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.query(
            // id=id, id= req.params, id={id}??
            `DELETE FROM events WHERE id=$1`, [id]
        )
        res.status(200).send('Event successfully deleted.')
    } catch (error) {
        console.log('Event does not exist')
    }
})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));