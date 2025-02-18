

"use strict";

var $ = function(id) {
	return document.getElementById(id);
};

var addEmail = function() {

	var isValid = true;

	var emailAddress1 = $("email-address1").value; 
	var emailAddress2 = $("email-address2").value;
	var firstName = $("first-name").value; 

	var errorMessage = "";

	
	// validate entries
	if (emailAddress1 != emailAddress2) {
		errorMessage = "Emails must match. "
		$("email-address1").nextElementSibling.firstChild.nodeValue = errorMessage; 
		isValid = false; 
	} else if (emailAddress2 != emailAddress1) {
		errorMessage = "Emails must match. "
		$("email-address2").nextElementSibling.firstChild.nodeValue = errorMessage; 
		isValid = false;
	}


	// validate the entries
    if (emailAddress1 == ""){
        errorMessage = "First email address entry required";
        $("email-address1").nextElementSibling.firstChild.nodeValue = errorMessage;
        isValid = false; 
    }else if (emailAddress2 == "") {
        $("email-address2").nextElementSibling.firstChild.nodeValue = "This entry is required!";
        isValid = false;
    }else if (firstName == "") {
        $("first-name").nextElementSibling.firstChild.nodeValue = "This entry is required!";
        isValid = false;
    }


    // validate the entries
    if (emailAddress1 == "") {
    	errorMessage = "1st email address entry required";
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (errorMessage == "" && isValid == true) {
        $("email-form").submit(); 
    } else {
    	alert(errorMessage);
    }


}


window.onload = function() {
	$("enter-text").onclick = addEmail;
	$("email-address1").focus();
}

