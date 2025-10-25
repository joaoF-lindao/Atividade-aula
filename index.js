import express from "express"



const host = '0.0.0.0';
const porta =3000;

const server = express();



server.get('/', (req, resp) => {
    resp.send(`
        <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
</head>
<body>
    <h1> Primeiro programa com node</h1>
</body>
</html>
        `);
});

server.get('/horaatual', (req, resp)=>{
        const horaatual = new Date();
        const hora = horaatual.getHours()+ ":"+ horaatual.getMinutes()+ ":"+ horaatual.getSeconds();
        resp.send(`<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
</head>
<body>
    <h1> horario do servidor ${hora}</h1>
</body>
</html>`)
});

server.listen(porta, host, ()=> {
    console.log(`servidor escutando em http://${host}:${porta}`);

});