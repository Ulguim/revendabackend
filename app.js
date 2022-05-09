const express = require('express')
const app = express();
const port = 3000;
const routes = require("./routes");
app.use(express.json());



app.use(routes);

app.get('/', (req, res) => {
    res.send('àlbuns Musicais')
    })


app.listen(port, () => {
    console.log(`Servidor em execução na porta: ${port}`)
    })