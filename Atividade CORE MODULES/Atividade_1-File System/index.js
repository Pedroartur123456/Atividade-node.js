// ATIVIDADE 1

// const http = require('http')
// const fs = require('fs')

// const port = 3000

// const server = http.createServer((req, res) =>{
//     fs.readFile('html', function(err, data){
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(date)
//         return res.end('<h1>Lido via FS!</h1>')
//     })
// })

// server.listen(port, () =>{
//     console.log(`Servidor on ${port}`)
// })





//ATIVIDADE 2

// const http = require('http')
// const fs = require('fs')

// const port = 3000

// const urlInfo = require("url").parse((req, res) =>{
// const urlInfo = require("url").parse(req.url, true);
// const name = urlInfo.query.name;

//         if(!name){
//             fs.readFile("index.html", function(err, data){
//                 res.witeHead(200, {"contet-type":"text/html"});
//                 res.write(data);
//                 return res.end();
//             })
//         }else{
//             fs.watchFile("arquivo.txt", name, function(err, data){
//                 res.writeHead(302,{
//                     Location: "/",
//                 })
//                 return res.end();
//             })
//         }
// })
//     server.listen(port, ()=>{
//         console.log(`Servidor on ${port}😍`);
//     })



//ATIVDADE 3

// let fs = require('fs');

// fs.writeFile('arquivo.txt', 'Texto para atividade 3', function(err){
//     if(err){
//         return console.log('erro')
//     }
//     console.log('Arquivo criado')
// })

//ATIVIDADE 4

// const fs = require('fs')

// fs.copyFile('atividade.txt', 'ola.txt', function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log("Arquivo Copiado com sucesso😍")
// })


//ATIVIDADE 5

// const fs = require('fs')

// const arqAntigo = 'arquivo.txt'
// const arqNovo = 'novo.txt'

// fs.rename(arqAntigo, arqNovo, (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//      console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
// })

//ATIVIDADE 6

// const fs = require('fs')

// fs.unlink('arquivo.txt', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('Arquivo Removido')
// })

//ATIVIDADE 7











//PATH
//ATIVIDADE 1

// const path = require('path')
// const diretorio = '/relatorios/semanal/arquivo.pdf';
// console.log(path.dirname(diretorio))

//ATIVIDADE 2 PATH

const path = require('path')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo.txt'

fs.rename(arqAntigo, arqNovo, (err)=>{
    if(err){
        console.log(err)
        return
    }
     console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})


