$(document).ready(function() {
  $("#traindetails").validate({
    	rules:{
    		trainname:{
    			required:true,
    			minlength: 3
    		},
    		trainnumber:{
    			required:true,
    			minlength: 3
    		}
    	},
    	message:{
    		trainname:{
    			required: "please put trainname",
    			minlength: " consist at least 2 charecters"
    		},
    		trainnumber:{
    			required: "please put trainnumber",
    			minlength: " consist at least 2 charecters"
    		},
    	},

         submitHandler:function(form){
         	return false;
         } 
    });


$("#adding").click(function() {
	var add={
		trainname: $("#name").val(),
		trainnumber: $("#number").val()
	}
	console.log(add);

$.post ("http://59ef0f7a684745001253e80a.mockapi.io/ticket",add)
});	
});

