const { app, PORT } = require("./app");

app.listen(PORT, () => {
    console.log(`App now listening on Port ${PORT}.`);
});
