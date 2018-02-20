[![Build Status](https://travis-ci.org/AdrianAdamiec/shoplo-client-node.svg?branch=master)](https://travis-ci.org/AdrianAdamiec/shoplo-client-node)
[![Coverage Status](https://coveralls.io/repos/github/AdrianAdamiec/shoplo-client-node/badge.svg?branch=master)](https://coveralls.io/github/AdrianAdamiec/shoplo-client-node?branch=master)
[![dependencies Status](https://david-dm.org/AdrianAdamiec/shoplo-client-node/status.svg)](https://david-dm.org/AdrianAdamiec/shoplo-client-node)

# Shoplo API node Client 

This sdk enables node developers to communicate with Shoplo API with an oauth 1 authentication. 
[More detailed info about api](https://docs.shoplo.com/api)

## Requirements

* node (6, 8 or 9)

## Installation

```
npm install --save shoplo-client
```

## Resources

- abandoned_cart
- asset
- blog
- cart
- category
- collection
- customer
- order
- page
- payment
- product
- promotion
- shipping
- shop
- status
- theme
- user
- variant
- vendor
- voucher

## Example

**Authentication using oauth 1.**
```js
const ShoploClient = require('shoplo-client');
const session = require('express-session');
const express = require('express');

const config = {
    "callbackUrl": "http://localhost:8080/callback",
    "clientKey": "CLIENT_KEY",
    "clientSecret": "CLIENT_SECRET"
};
const shoploClient = new ShoploClient(config);

const app = express();
app.use(session({
    secret: 'SOME_SECRET',
    resave: true,
    saveUninitialized: true
}));

app.get('/', async (req, res) => {
    const response = await shoploClient.getRequestToken();
    req.session.tokenSecret = response.tokenSecret;
    res.redirect(shoploClient.getAuthorizeUrl(response.token));
});

app.get('/callback', async (req, res) => {

    const verifier = req.query.oauth_verifier;
    const oauthToken = req.query.oauth_token;
    const tokenSecret = req.session.tokenSecret;

    const response = await shoploClient.getAccessToken(oauthToken, tokenSecret, verifier);

    console.log(response);
    res.send('callback');
});
```

**Orders resource.**

```js
app.get('/orders', async (req, res) => {
    const config = {
        "callbackUrl": "http://localhost:8080/callback",
        "clientKey": "CLIENT_KEY",
        "clientSecret": "CLIENT_SECRET",
        "accessToken": "ACCESS_TOKEN",
        "secretToken": "SECRET_TOKEN"
    };
    const shoploClient = new ShoploClient(config);


    const orderResource = new OrdersResource(shoploClient);
    const response = await orderResource.getOrders();
    const response = await orderResource.getCount();

    const orderData = {
        "discount_code" : null,
        "landing_site" : "http://classicdark.shoplo.com/kolekcja/frontpage/adidas-samoa-shoes",
        "referring_site" : "http://classicdark.shoplo.com",
        "notes" : null,
        "order_date" : "2017-12-19 21:42:37",
        "payment_details" : {
          "payment_id" : "2",
          "title"	: "eps"
        },
        "shipping_details" : {
          "title"	: "Odbiór osobisty",
          "price"	: "850"
        },
        "shipping_address" : {
          "first_name" : "Jan",
          "last_name" : "Kowalski",
          "phone" : "123123123",
          "street" : "Testowa",
          "number" : "1",
          "city" : "Warszawa",
          "zip_code" : "02-259",
          "country_code" : "pl"
        },
        "order_items" : [
          {
            "product_id":"2359",
            "variant_id":"20991",
            "quantity":"1",
            "price":"32100"
          }
        ],
        "customer" : {
          "email" : "jan.kowalski@somemail.com",
          "first_name" : "Jan",
          "last_name" : "Kowalski",
          "phone"	: "123123123",
          "address" : [
            {
              "street" : "Biskupa",
              "number" : "97",
              "city"	: "Warszawa",
              "zip_code"	: "02-122",
              "country_code"	: "pl"
            }
          ]
        }
      };

    const response = await orderResource.createOrder(orderData);
    const response = await orderResource.deleteOrder(1694);

    res.send(response);
});
```

**Promotions resource.**

```js
app.get('/promotions', async (req, res) => {
    const promotionResource = new PromotionResource(shoploClient);
    const response = await promotionResource.getPromotions(3);
    const response = await promotionResource.getCount();

    const promotionData = {
        "title" : "Winter sale",
        "start_at" : "2018-12-01 00:00:00",
        "finish_at" : "2018-12-30 00:00:00",
        "promotion_type" : 2,
        "promotion_on_type" : 1,
        "promotion_value" : 55,
        "products" : [
            1,
            2
        ]
    };

    const response = await promotionResource.createPromotion(promotionData);
    const response = await promotionResource.updatePromotion(5, promotionData);
    const response = await promotionResource.deletePromotion(5);

    res.send(response);
});
```

