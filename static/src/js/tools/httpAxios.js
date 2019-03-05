define(["axios","qs","public"],function(axios,qs){  
		function queryParam(json) {
			if (!json) return ''
			return cleanArray(Object.keys(json).map(key => {
				if (json[key] === undefined) return ''
				return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
			})).join('&')
		}

		function cleanArray(actual) {
			const newArray = []
			for (let i = 0; i < actual.length; i++) {
				if (actual[i]) {
					newArray.push(actual[i])
				}
			}
			return newArray
		}

		var o1 = document.querySelector(".option1");
		var o2 = document.querySelector(".option2")
		var o3 = document.querySelector(".option3")
		var o4 = document.querySelector(".option4")
		var o5 = document.querySelector(".option5")
		var o6 = document.querySelector(".option6")
		var option1 = axios.create({
			baseURL: "https://easy-mock.com/mock/5ba6d9c8f1d0f1653d091b5d"
		})
   
		o1.onclick = function() {
			option1.post('/dodoWapL/test/list').then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

		}


		var option2 = axios.create({
			baseURL: "https://easy-mock.com/mock/5ba6d9c8f1d0f1653d091b5d",
			// 设置请求头
		    headers:{
		      'customer-head':'wufff'
		    }
		})
   
		o2.onclick = function() {
			option2.post('/dodoWapL/test/list').then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

		}

     
      	var option3 = axios.create({
			baseURL: "https://easy-mock.com/mock/5ba6d9c8f1d0f1653d091b5d",
			// 转换成url查询字符串
			params:{
				page:123
			}
		})
   
		o3.onclick = function() {
			option3.post('/dodoWapL/test/list').then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

		}


       var option4 = axios.create({
			baseURL: "https://easy-mock.com/mock/5ba6d9c8f1d0f1653d091b5d",
			// 传换格式 只支持post path 
			 transformRequest: [function (data, headers) {
				    // Do whatever you want to transform the data
				    return data;
			}]
		})
   
		o4.onclick = function() {
			option4.post('/dodoWapL/test/list',{page:1,length:6}).then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

		}


		var option5 = axios.create({
			baseURL: "https://easy-mock.com/mock/5ba6d9c8f1d0f1653d091b5d",
			// 传换格式 只支持post path 
			headers: {'content-type': 'application/x-www-form-urlencoded'},
			transformRequest: [function (data, headers) {
				    // Do whatever you want to transform the data

				    return queryParam(data);
			}]
		})
   
		o5.onclick = function() {
			option5.post('/dodoWapL/test/list',{page:1,length:6}).then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

		}



		var option6 = axios.create({
			baseURL: "https://easy-mock.com/mock/5ba6d9c8f1d0f1653d091b5d",
			// 传换格式 只支持post path ,
			headers: {'content-type': 'application/x-www-form-urlencoded'},
			transformRequest: [function (data, headers) {
				    // Do whatever you want to transform the data
                   
                     var data = qs.stringify(data)
                     console.log(data);
				    return data;

			}]
		})
   
		o6.onclick = function() {
			option6.post('/dodoWapL/test/list',{page:1,length:6}).then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});

		}





































})
})