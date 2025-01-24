// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

app.get("/assistant/greet", (req, res) => {
  const name = req.query.name
  if (!name) {
    res.status(400).json({ error: "Please provide a name"})
  }

  const date = new Date()
  const day = date.getDay()
  let dayMessage = "Have a wonderful day"
  if (day == 1) {
    dayMessage = "Happy Monday! Start your week with energy!"
  } else if (day == 5) {
    dayMessage = "It's Friday! The weekend is near!"
  }
  const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`

  res.send({
    welcomeMessage,
    dayMessage
  })
}) 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
