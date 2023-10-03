const db = require('../models');

exports.getBooks = (req, res) => {
    const books = db.get('books').value();

    res.send(books);
};

exports.createBook = (req, res) => {
    let book = req.body;

    if (book) {

        const entity = db.get('books').takeRight(1).value()[0];
        const id = ((entity) ? (entity.id + 1) : 0);

        book = {
            ...book,
            id: id
        };

        db.get('books').push(book).write();

        res.setHeader('Access-Control-Allow-Origin', 'https://pacifica-lvelitoruiz.vercel.app');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.sendStatus(200);
    } else {

        res.status(500).send('uncaught error....');
    }
};

exports.updateBook = (req, res) => {
    let book = req.body;
    if (book) {

        // update
        db.get('books').chain().find({ id: book.id }).assign(book).write();

        res.setHeader('Access-Control-Allow-Origin', 'https://pacifica-lvelitoruiz.vercel.app');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.sendStatus(200);
    } else {

        res.status(500).send('uncaught error....');
    }
};

exports.deleteBook = (req, res) => {
    const id = req.body.id;

    if (id) {

        db.get('books').remove({ id: id }).write();

        res.setHeader('Access-Control-Allow-Origin', 'https://pacifica-lvelitoruiz.vercel.app');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.sendStatus(200);
    } else {

        res.status(500).send('uncaught error....');
    }
}; 