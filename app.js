const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Database Connected');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

main();
const User = require('./module/models');

User.insertMany([{
    name: 'Utsav',
    email: 'utsav@example.com',
    password: 'password123',
    age: 25,
},
{
    name: 'Rohan',
    email: 'rohan@example.com',
    password: 'password456',
    age: 30,
},
{
    name: 'Anjali',
    email: 'anjali@example.com',
    password: 'password789',
    age: 28,
},
{
    name: 'Priya',
    email: 'priya@example.com',
    password: 'password101',
    age: 22,
},
]);


// User.find()
//     .then(users => console.log('All users:', users))
//     .catch(err => console.error('Error fetching users:', err));

User.findById('67bcb251e8cc972fda1b5553')
    .then(user => console.log('User by ID:', user))
    .catch(err => console.error('Error fetching user by ID:', err));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});