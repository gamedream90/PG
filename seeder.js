const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/confessionsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Define confession schema and model
const confessionSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags: [String],
    reactions: {
        love: Number,
        sad: Number,
        laugh: Number
    }
});

const Confession = mongoose.model('Confession', confessionSchema);

// Sample data to insert
const sampleConfessions = [
    {
        title: "A Confession of Love and Regret",
        body: "I’ve spent years hiding my feelings, burying them deep inside, afraid of the vulnerability that comes with love...",
        tags: ["love", "life", "regret"],
        reactions: {
            love: 1000,
            sad: 500,
            laugh: 300
        }
    },
    {
        title: "The Secret I Keep",
        body: "I have a secret I’ve never told anyone, a truth I hold on my chest. It's the secret I've carried for years...",
        tags: ["secret", "guilt"],
        reactions: {
            love: 400,
            sad: 800,
            laugh: 50
        }
    },
    {
        title: "Guilt Overwhelms Me",
        body: "I feel guilty every day for the things I've done. I can't forgive myself for the pain I've caused.",
        tags: ["guilt", "regret", "shame"],
        reactions: {
            love: 250,
            sad: 1000,
            laugh: 10
        }
    }
];

// Function to insert sample data
const insertSampleData = async () => {
    try {
        await Confession.deleteMany({});  // Clear the collection before inserting new data
        await Confession.insertMany(sampleConfessions);
        console.log("Sample data inserted successfully");
        mongoose.connection.close();  // Close the connection after operation
    } catch (error) {
        console.error("Error inserting sample data:", error);
    }
};

insertSampleData();
