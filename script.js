var a = "";
var b = "";
var c = "";
var d = "";
var e = "";
var f = "";
$(document).ready(function() {
	$(function() {
           $( "#choose" ).datepicker();
        });
	$.ajax({
		type: "GET",
		url: "https://59ef0f7a684745001253e80a.mockapi.io/ticket",
		dataType: "json",
		success: function(result) {
			var txt="<option>"+"select..."+"</option>"
			 d = result			
			for(i = 0; i < result.length; i++) {
				txt += "<option>" + result[i].trainname + "</option>";
			}
			$("#selection").html(txt);
		}

	})

	$("#selection").change(function() {
	a = $("#selection").val();
	console.log(a);
});
$("#selection").click(function() {
	
	for(var j= 0; j <d.length; j++){
		if(d[j].trainname == a){
			c= d[j].trainnumber;
			console.log(c);
		}
document.getElementById("number").innerHTML=c;
	}
});
	
	$("#gender1").change(function() {
	b = $("#gender1").val();
	console.log(b);

});


$("button").click(function() {
	var add={
		name: $("#name1").val(),
		age: $("#age1").val(),
		sex: b,
		trainname: a,
		trainnumber: c
	}

$.post ("https://59ef0f7a684745001253e80a.mockapi.io/details",add)
});	


	$("#gender2").change(function() {
	e = $("#gender2").val();
	console.log(e);

});


$("button").click(function() {
	var add={
		name: $("#name2").val(),
		age: $("#age2").val(),
		sex: e,
		trainname: a,
		trainnumber: c
	}

$.post ("https://59ef0f7a684745001253e80a.mockapi.io/details",add)
});	


$("#gender3").change(function() {
	f = $("#gender3").val();
	console.log(f);

});


$("button").click(function() {
	var add={
		name: $("#name3").val(),
		age: $("#age3").val(),
		sex: f,
		trainname: a,
		trainnumber: c
	}

$.post ("https://59ef0f7a684745001253e80a.mockapi.io/details",add)
});	

   

});




