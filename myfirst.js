const http = require("http");

const server = http.createServer(function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	if (req.method === "OPTIONS") {
		res.writeHead(200, {
			"Content-Type": "text/html; charset=utf-8"
		});
		res.end("A bunch of text ⲁⲩⲱ ϩⲉⲛϣⲁϫⲉ ϩⲛ̄ⲧⲙⲛⲧⲣⲙⲛⲕⲏⲙⲉ for good measure");
		return;
	}
});

server.listen(3000, () => {
	console.log("Server listening on port 3000");
});

