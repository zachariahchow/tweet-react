const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * ================ REACT config                     =====================
 * =======================================================================
 */

app.use('/', express.static('public'));

/*
 * =======================================================================
 * ============== normal express routes go here   ========================
 * =======================================================================
 */

app.get('/banana', (request, response) => {
    response.send("ehllo");
});

/*
 * =======================================================================
 * ==============   react express route           ========================
 * =======================================================================
 */

app.get('/react', (req, res) => {
    const myHtml = `
    <html>
    <head>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap" rel="stylesheet">
    </head>
      <body>
        <div class="app-header__container">
            <h1 class="app-header">Tweet React</h1>
        </div>
        <div id="app"></div>
        <script type="text/javascript" src="/main.js"></script>
      </body>
    </html>
  `;
    res.send(myHtml);
});

/*
 * =======================================================================
 * ============                     LISTEN                   =============
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
    console.log(`ssssserver is now running on http://localhost:${process.env.PORT}`);
});