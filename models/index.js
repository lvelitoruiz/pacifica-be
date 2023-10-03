const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// db
const adapter = new FileSync('./db.json');
const db = low(adapter);

const mock = {
    users: [
        {
            id: 0,
            email: 'demo@email.com',
            password: '123456.',
            name: 'Luis Velito',
        }
    ],
    books: [
        {
            id: 0,
            title: 'Treasure Island',
            author: 'Stevenson',
            description: 'Treasure Island from Stevenson'
        },
        {
            id: 1,
            title: 'Master of the World',
            author: 'Jules Gabriel Verne',
            description: 'Master of the World from Jules Gabriel Verne'
        },
        {
            id: 2,
            title: 'Moby Dick',
            author: 'Herman Melville',
            description: 'Moby Dick from Herman Melville'
        },
        {
            id: 3,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            description: 'Pride and Prejudice from Jane Austen'
        },
        {
            id: 4,
            title: 'The Call of the Wild',
            author: 'Jack London',
            description: 'The Call of the Wild from Jack London'
        },
        {
            id: 5,
            title: 'Wuthering Heights',
            author: 'Emily Brontë',
            description: 'Wuthering Heights from Emily Brontë'
        },
        {
            id: 6,
            title: 'The Time Machine',
            author: 'H.G. Wells',
            description: 'The Time Machine from H.G. Wells'
        },
        {
            id: 7,
            title: 'The Picture of Dorian Gray',
            author: 'Oscar Wilde',
            description: 'The Picture of Dorian Gray from Oscar Wilde'
        },
        {
            id: 8,
            title: 'Dracula',
            author: 'Bram Stoker',
            description: 'Dracula from Bram Stoker'
        },
        {
            id: 9,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            description: 'The Great Gatsby from F. Scott Fitzgerald'
        },
        {
            id: 10,
            title: 'Frankenstein',
            author: 'Mary Shelley',
            description: 'Frankenstein from Mary Shelley'
        },
        {
            id: 11,
            title: '1984',
            author: 'George Orwell',
            description: '1984 from George Orwell'
        },
        {
            id: 12,
            title: 'Brave New World',
            author: 'Aldous Huxley',
            description: 'Brave New World from Aldous Huxley'
        },
        {
            id: 13,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            description: 'To Kill a Mockingbird from Harper Lee'
        },
        {
            id: 14,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            description: 'The Catcher in the Rye from J.D. Salinger'
        },
        {
            id: 15,
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            description: 'Don Quixote from Miguel de Cervantes'
        },
        {
            id: 16,
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            description: 'War and Peace from Leo Tolstoy'
        },
        {
            id: 17,
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            description: 'Crime and Punishment from Fyodor Dostoevsky'
        },
        {
            id: 18,
            title: 'The Odyssey',
            author: 'Homer',
            description: 'The Odyssey from Homer'
        },
        {
            id: 19,
            title: 'Ulysses',
            author: 'James Joyce',
            description: 'Ulysses from James Joyce'
        },
        {
            id: 20,
            title: 'The Divine Comedy',
            author: 'Dante Alighieri',
            description: 'The Divine Comedy from Dante Alighieri'
        },
        {
            id: 21,
            title: 'A Tale of Two Cities',
            author: 'Charles Dickens',
            description: 'A Tale of Two Cities from Charles Dickens'
        },
        {
            id: 22,
            title: 'The Grapes of Wrath',
            author: 'John Steinbeck',
            description: 'The Grapes of Wrath from John Steinbeck'
        },
        {
            id: 23,
            title: 'Meditations',
            author: 'Marcus Aurelius',
            description: 'Meditations from Marcus Aurelius'
        },
        {
            id: 24,
            title: 'Anna Karenina',
            author: 'Leo Tolstoy',
            description: 'Anna Karenina from Leo Tolstoy'
        },
        {
            id: 25,
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel García Márquez',
            description: 'One Hundred Years of Solitude from Gabriel García Márquez'
        },
        {
            id: 26,
            title: 'The Iliad',
            author: 'Homer',
            description: 'The Iliad from Homer'
        },
        {
            id: 27,
            title: 'The Brothers Karamazov',
            author: 'Fyodor Dostoevsky',
            description: 'The Brothers Karamazov from Fyodor Dostoevsky'
        },
        {
            id: 28,
            title: 'The Sun Also Rises',
            author: 'Ernest Hemingway',
            description: 'The Sun Also Rises from Ernest Hemingway'
        },
        {
            id: 29,
            title: 'The Metamorphosis',
            author: 'Franz Kafka',
            description: 'The Metamorphosis from Franz Kafka'
        }
    ]    
};

db.defaults(mock).write();

// EXPORT DEFAULT
module.exports = db;
