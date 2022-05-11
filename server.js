//
// Importing libraries
//

const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

// Referenced Path & UUID from Activity 11.17 (INST_POST-Requests)

const PORT = process.env.PORT || 3001;

//
// Middleware
//

// Lets us use static assets(like images,css files, & javascript) directories
app.use(express.static('public')); 
app.use(express.json())
// Parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



// Listen for server on port
  app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`)
  
);

