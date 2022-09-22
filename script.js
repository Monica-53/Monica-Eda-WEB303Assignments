7/*
	WEB 303 Assignment 1 - jQuery
	{Monica Eda}
*/


$(document).ready(function(){ // This is the function that checks the doucment is ready to work with
$('input').keyup(function() {  
let $salary =$('#yearly-salary').val();
let $percent = $('#percent').val();
let amount =($salary * $percent / 100).toFixed(2);  //let maths = (sal * per / 100).toFixed(2);
$('#amount').text(amount);

});

});



	








