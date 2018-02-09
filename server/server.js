require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    app = express();

// Destructuring .env file
const { SERVER_PORT, SESSION_SECRET, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL, CONNECTION_STRING } = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

// Database Connection

// Set Passport to use Auth0Stragey
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log('created auth 0')
    done(null, profile)
}));
passport.serializeUser((profile, done)=>{
    console.log('serializeUser')
    done(null, profile)
});
passport.deserializeUser((profile, done)=>{
    console.log('deserializeUser')
    done(null, profile)
});

// EndPoints
//// Auth 0
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000'
}))
//app.get('auth/me', )

// Server Listening
app.listen(SERVER_PORT, () => (console.log(`Chillin on port: ${SERVER_PORT}`)))
