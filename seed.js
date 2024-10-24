const mongoose = require('mongoose');
const Confession = require('./models/confession');

mongoose.connect('mongodb://localhost:27017/confessionsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedData = [
    {
        title: "A Confession of Love and Regret",
        body: "I’ve spent years hiding my feelings, burying them deep inside, afraid of the vulnerability that comes with love.",
        tags: ['love', 'life', 'regret'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "The Secret I Keep",
        body: "I have a secret I’ve never told anyone, a truth I hold close to my chest.",
        tags: ['secrets', 'life'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "Escaping Reality",
        body: "Sometimes I wish I could just escape my life and live in a fantasy.",
        tags: ['escapism', 'life', 'dreams'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "Guilty of Lying",
        body: "I’ve told a lie that has hurt someone I care about, and I don’t know how to make it right.",
        tags: ['guilt', 'regret'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "Friendship Confession",
        body: "I’ve fallen for my best friend, and I’m terrified of ruining our friendship.",
        tags: ['friendship', 'love'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "The Weight of Expectations",
        body: "I feel overwhelmed by the expectations others have of me, and I just want to be myself.",
        tags: ['life', 'pressure'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "Regrets of the Past",
        body: "Looking back, I wish I had taken different paths in my life.",
        tags: ['regret', 'life'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "The Fear of Failure",
        body: "I am constantly afraid of failing, and it stops me from trying new things.",
        tags: ['life', 'fear'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "A Confession of Hope",
        body: "Even in my darkest times, I hold on to the hope that things will get better.",
        tags: ['hope', 'life'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
    {
        title: "A Moment of Joy",
        body: "I once experienced a moment of pure joy, and I wish I could relive it.",
        tags: ['joy', 'life'],
        reactions: {
            love: 0,
            sad: 0,
            laugh: 0,
            userReactions: [],
        },
    },
];

async function seedDatabase() {
    try {
        await Confession.deleteMany({});
        await Confession.insertMany(seedData);
        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
