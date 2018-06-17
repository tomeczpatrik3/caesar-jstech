const express = require('express');
const session = require('express-session');

const OffsetGenerator = require('./utils/offset');

const PORT = 3000;
const app = express();

/**
 * Header beálltások:
 */
app.use((req, res, next) => {
    res.setHeader('X-Received-At', new Date().toDateString());
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use(express.json());

app.use(session({
    secret: 'alma fa',
    resave: false,
    saveUninitialized: false,
}));

/**
 * GET végpont:
 * Egy adott kulcshoz generál egy egész számot (az eltolást)
 */
app.get('/getOffset/:key', (req, res, next) => {
    const offsetGenerator = new OffsetGenerator();
    const offset = offsetGenerator.getOffset(req.params.key);

    res.send(JSON.stringify({'offset': offset}));
    
    next();
  });

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});
