// var express = require('express');
// var router = express.Router();


// router.get('/', function(req,res,next){
// 	req.query.name





// 	res.render('index',{title:'Express'})
// })

// moudle.exports = router;
// 
app.get('/getMusic', function(req,res){
	console.log('lallalalalllalla')
	console.log(req.query)
	var data={
		name:"Yin Mei"
	}
	res.send({data})
})