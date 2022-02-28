import axios from 'axios'

const url="https://dmserver.herokuapp.com/signup"
const user={
	Fname : "Michael";
	Lname : "Mwasela";
	email : "Michael@microdam.co.ke";
	age : 22;
	phone : "0717217016";
	password : "Password";
 	myLatLng: {lat: -4.021012062647091,lng: 39.62717842822892};
 	;
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