"use strict";

const express = require("express");
const router = express.Router();

const ctl = require("./home.ctrl");

router.get("/", ctl.home);

router.get("/login", ctl.login);
    
module.exports = router;