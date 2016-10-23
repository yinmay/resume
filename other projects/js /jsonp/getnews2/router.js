/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/Info', function(req, res) {
	var people = ['yinmei']
	var cb = req.query.callback;
	res.send(cb +'('+JSON.stringify(people)+')')

})

