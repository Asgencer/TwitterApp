const displayContent = (req, res) => {
    const url = req.url
    const method = req.method;

    if(url == "/profile") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>Proifl</p>');
        return res.end();
    }

    else if (url == "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>semih</p>');
        return res.end();
    }

    else if (url == "/settings" && method == "POST") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Done</h1>');
        return res.end();
    }
    
    else if (url == "/settings") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Settings</h1><form action="/settings" method="POST"><input type="text"><button type="submit">PRESS ME</button></form>');
        return res.end();
    }

    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Pge Not Found</p>');
    res.end();
    
}

module.exports = displayContent;