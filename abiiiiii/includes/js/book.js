function formaction(event){

    var name = document.bookform.fullname.value;
    var phone= document.bookform.number.value;
	var gmail= document.bookform.gmail.value;
    var at=gmail.indexOf("@");
    var dot=gmail.lastIndexOf(".");
    var date = document.bookform.date.value;
    var add =document.bookform.address.value;
    event.preventDefault();

    if(name=="" || name<1){
        document.getElementById("fnameerror").innerHTML="<br>Enter Your Name";
		document.getElementById("fname").style.border="2px solid red";
       // return false;  
    }

    else if(phone=="" || phone<10){
        document.getElementById("phoneerror").innerHTML="Please enter your phone Number"; 
		document.getElementById("phone").style.border="2px solid red";
       // return false;
    }

    else if(gmail=="" || gmail==null){
        document.getElementById("gmailerror").innerHTML="enter your gmail <br>";
		document.getElementById("gmail").style.border="2px solid red";
    }

    else if(at<1 || dot<at+2 || dot+2>=gmail.length){
        alert("please enter a valid gmail")
    }

    else if(date==null || date==""){
        document.getElementById("datebox").innerHTML="Enter The Date <br>";
		document.getElementById("date").style.border="2px solid red";
    }
	
    else if(add=="" || add==null){
        document.getElementById("addresss").innerHTML="Enter Your Address <br>";
		document.getElementById("address").style.border="2px solid red";
    }
	
	
    else{
        alert("your form submited succesfully");
       // return true;
    }

}





