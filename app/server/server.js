// //Save file section
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT;

// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/Docs_Project', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const ContentSchema = new mongoose.Schema({
//   content: String,
// });

// const Content = mongoose.model('Content', ContentSchema);

// app.post('/save', async (req, res) => {
//   const { content } = req.body;
//   const newContent = new Content({ content });
//   await newContent.save();
//   res.status(200).send('Content saved');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
