//import $ from 'jquery'

$('input, textarea').hide();
$('<input type="text" class="awesome_input">').appendTo(".text_input");
// $('#btn').hide(100);

 btn.onclick = function(){
   

var x=0;
var c=0;
alert($(".awesome_input").val(function(index, x){
	    if(x == ""){
	    	alert("Fill in all the fields!");
	    	exit();
	    }else{c++; if(c==2){
	    				alert('Success!');
	    				exit();}}
	  }));




   }