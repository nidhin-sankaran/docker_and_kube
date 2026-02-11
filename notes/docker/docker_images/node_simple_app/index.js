const express = require('express');

const app = express();
const PORT = 3000;

// Method that prints "hi there"
function sayHi() {
    console.log("hi there");
}

sayHi();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
