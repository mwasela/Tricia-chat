
//Login  package with axios

const url="https://dmserver.herokuapp.com/signup"
const user={
	
	
	email : "admin@admin.com";
	password : "password";
}
axios({
	method: 'post',
	url: Url,
	data:{
		user
	}
})
.then(data=>console.log(data))
.catch(err=>console.log(err))

if(statusText=='OK'){
	window.location.replace("/chat.html")

