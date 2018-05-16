$(document).ready(function() {
	$(function() {
            $("#choose").datepicker();
       });
	$.ajax({
		type: "GET",
		url: "https://59ef0f7a684745001253e80a.mockapi.io/details",
		dataType: "json",
		success: function(result) {
			var txt="";
			
			for(i = 0; i < result.length; i++) {
				txt +=  "<tr><td>" + result[i].id +"</td><td>" + result[i].trainname + 
				"</td><td>" + result[i].trainnumber + "</td><td>" + result[i].name 
				+"</td><td>" + result[i].age +"</td><td>" + result[i].sex
				 + "</td></tr>"
			}
			$("#tbody").html(txt);
			console.log(txt)
		}
	});
});
