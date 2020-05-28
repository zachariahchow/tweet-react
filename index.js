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