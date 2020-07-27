module.exports = (req, res) => {
    return res.status(404).send(`<h2>${req.url}? That's a 404 buddy!</h2>`);
}