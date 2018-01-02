 function clicked() {
	 var user = document.getElementById('username');
	 var pass = document.getElementById('password');
	 
	 var coruser = "test";
	 var corpass = "123";
	 
	 if( user.value == coruser )
		 
	 { 
	 if(pass.value == corpass)
	 {
	  window.alert("logged in");
	  window.open("https://www.youtube.com/");
	  
	 }
	 else
		 
		 {
			 window.alert("invalid username or password");
			 
		 }
	 }
	 else 
	 {
		 window.alert("invalid usernmae or password");
	 } 	
 } 
		 