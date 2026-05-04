const Listen = (app) => {
    app.listen(process.env.PORT, () => {
        console.log("Backend successfully Running")
    })
};

module.exports = Listen;