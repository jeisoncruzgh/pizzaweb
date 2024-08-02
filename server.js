const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
 const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json'
 };
 //creando el secidor
 http.createServer((req,res)=>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    let app = path.join(__dirname, 'public', url.pathname === '/' ? 'pizzeriai.html' : url.pathname);

    if(url.pathname.startsWith('/css/') || url.pathname.startsWith('/js/')){
        app = path.join(__dirname, 'src', url.pathname);
    }else if(url.pathname === '/data'){
      app = path.join(__dirname,'src', 'data.json');
    }

    //agregar leptras pequeñas a cada letra  inicial de un archivo
    
    const extname = String(path.extname(app)).toLowerCase();
    const conteType = mimeTypes[extname] || 'application/octet-stream';

    // leer puertos http
    fs.readFile(app,(error,content)=>{
      if(error){
         if(error.code === 'ENOENT') {
            res.writeHead(404,{'Conten-Type': 'text/html'}, 'utf-8');
            res.end('<h1>404 Not found</h1>', 'utf-8');
         }else{
            res.writeHead(500);
            res.end(`server Error: ${error.code}`, 'utf8');
         }
      }else{
         res.writeHead(200,{'Contet-Type': conteType});
         res.end(content, 'utf-8');
      }
    });
 }).listen(PORT,()=> {
   console.log(`Servidor escuchando en el puerto${PORT}`);
 });