// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
// const bodyparser = require("body-parser");
const stripe=require('stripe')(
    'sk_test_51OXkDULpmqR7VJJrG5SQC8UMlbsMZV6JP1O82yhO9cVynCrx0TKhLZt0xoGZWzUI3guJfVmTfCZO1shaL7wuaiDJ00lthbKszw'
);
// middleware
const app = express()
// app.use(cors());
// app.use(cors({origin: true, credentials: true}));
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send ('Hello World');
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received for this Amount >>> ',total);
  const paymentIntent= await stripe.paymentIntents.create({
    amount:total,
    currency:'usd'

  }) ;
//   ok created
  response.status(201).send({
     clientSecret: paymentIntent.client_secret
    });
});

//  listen command
exports.api =functions.https.onRequest(app);