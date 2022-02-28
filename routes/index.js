const { auth } = require('express-openid-connect');
// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

const config = {
  authRequired: true,
  auth0Logout: true,
  secret: 'y1b57y8t9i58t48t',
  baseURL: 'https://trishia-chat.herokuapp.com',
  clientID: 'NQjXVTZ9zr3jx5K4XvFhy0q0B5KxNP6a',
  issuerBaseURL: 'https://dev-zwm4bs5i.us.auth0.com'
};

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});