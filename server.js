//
// Importing libraries
//

const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
// Referenced Path & UUID from Activity 11.17 (INST_POST-Requests)



const PORT = 3001

// Middleware
//

// Lets us use static assets(like images,css files, & javascript) directories
app.use(express.static('public')); 
app.use(express.json())
// Parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


//
// Get , Post, Delete
//



// database.push(info)   
//     //from Activity 10.20 - writeFileSync(path,data)
//     fs.writeFileSync('.db/db.json', JSON.stringify(data));
//     res.sendFile(path.join(__dirname, '.db/db.json'));   
// });

// 
// Delete
//__________
//Need UUID
// If all the required properties are present
//  if () {
// Math.floor(Math.random() * 100),
//       review_id: 
//       Math.floor((1 + Math.random()) * 0x10000)
//       .toString(3)
//       .substring(1);
//     };


// Listen for server on port
  app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`)
  
);