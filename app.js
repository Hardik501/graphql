const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://hari:hari123@cluster0.qm7su.mongodb.net/hari?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true  });
mongoose.connection.once('open', () => {
    console.log('connected to the database')});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('server is up!!!!! on port 4000');
});

