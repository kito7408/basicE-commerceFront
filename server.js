const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/test-sonr'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/test-sonr/index.html'));});
app.listen(process.env.PORT || 8080, () => {
	console.log('server on port 3000');
});
