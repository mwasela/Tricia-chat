


const url="https://dmserver.herokuapp.com/signup"
const user={
	Fname : "'+document.getElementById("Fname")'";
	Lname : "'+document.getElementById("Lname")'";
	email : "'+document.getElementById("Email")'";
	age :  "'+document.getElementById("Age")'";
	phone :  "'+document.getElementById("Phone")'";
	password :  "'+document.getElementById("Password")'";
 	lat:  "'+document.getElementById("lat")'";
 	lng:  "'+document.getElementById("lng")'";
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
}
}