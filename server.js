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
    }
 });