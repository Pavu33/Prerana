'use-strict';
const express = require('express');
const router = express.Router();
const errors = require('../helpers/errors');
const _ = require('underscore');
const jsonResponse = require('../utils/json-response');
const userAuthHandler = require('../handlers/user-auth');
const firebase = require('firebase');

router.post('/login', (req, res) => {
    if(! _.has(req.body,"user_name") && ! _.has(req.body,"password")){
         console.log("Error : Missing Parameters");
        jsonResponse(res, errors.missingParameter(true), null);
    }
  
    userAuthHandler.login(req.body, (error, data)=>{
        if(error){
            jsonResponse(res, errors.internalServer(true), null);
        }
        jsonResponse(res, null, data);
    })

    
});


module.exports = router;
