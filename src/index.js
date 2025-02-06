// index.js
import express from "";
const app = express();

// Route to handle root request
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello from Cloud Run</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #4CAF50; }
        </style>
      </head>
      <body>
        <h1>Hello from Cloud Run!</h1>
        <p>Running on cloud</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
