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
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

// Set Passport to use Auth0Stragey
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // console.log('created auth 0')
    // done(null, profile)
    const db = app.get('db');

    //deconstructing Profile we get from auth 0
    const { sub, given_name, family_name } = profile._json;

    db.find_user([sub]).then(dbResponse => {
        if (dbResponse[0]) {
            done(null, dbResponse[0].id)
        } else {
            const image = 'https://robohash.org/' + Math.floor(Math.random() * 100) + '?set=set3'
            db.create_user([sub, image, given_name, family_name, 'none', 'none', 'none', 'none', 01, 01, 2001]).then(dbResponse => {
                done(null, dbResponse[0].id)
            })
        }
    })
}));
passport.serializeUser((id, done) => {
    console.log('serializeUser')
    done(null, id)
});
passport.deserializeUser((id, done) => {
    console.log('deserializeUser')
    const db = app.get('db');
    db.find_logged_in_user([id]).then(dbResponse => {
        done(null, id)
    })
});

// EndPoints
//// Auth 0
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/Dashboard/'
}))
//// This enpoint checks to see if user is still loged in
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('user not loged in')
    } else {
        res.status(200).send(req.user)
    }
})
// Server Listening
app.listen(SERVER_PORT, () => (console.log(`Chillin on port: ${SERVER_PORT}`)))
