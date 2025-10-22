const userController = (req, res) => {
    const userId = req.params.id;
    res.send(`<h1>User ID: ${userId}</h1>`);
};

module.exports = userController;
