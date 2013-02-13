/* var balance = 5000;


if ( balance >= 0 ) {


	alert("The balance is positive");
	if ( balance > 10000) {
		
		alert("the balance is large!");
	
	}

} else {
	alert("The balance is negative");


} */


var gas = "none";

switch ( gas ) {
	case "regular":
		alert("its $3.50");
break;
	case "premium":
		alert("its 4");
break;	
	case "none":
		alert("its 5");
break;	
	case "diesel":
		alert("its 7");
break;	
	default:
		alert("this is not gas");
}