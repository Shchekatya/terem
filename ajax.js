$(document).ready(function () {
	$("#btn").click(
		function (e) {
			e.preventDefault()
			let arr = {};
			$('#ajax_form').find('input').each(function () {
				arr[$(this).attr("name")] = $(this).val();

			});
			$('#ajax_form').find('select').each(function () {
				arr[$(this).attr("name")] = $(this).val();

			});
			const arrStr = JSON.stringify(arr);
			$('#result_form2').text(arrStr)

			let xhr = new XMLHttpRequest();			
			xhr.upload.onprogress = function (event) {
				console.log(`Отправлено ${event.loaded} из ${event.total}`);
			};
			xhr.onloadend = function () {
				if (xhr.status == 200) {
					console.log("Успех");
				} else {
					console.log("Ошибка " + this.status);
				}
			};
			xhr.open("POST", "/json.php");
			xhr.send(arrStr);

			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');

		}
	);
});



function sendAjaxForm(result_form, ajax_form, url) {
	$.ajax({
		url: url, //url страницы (action_ajax_form.php)
		type: "POST", //метод отправки
		dataType: "html", //формат данных
		data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект		
		success: function (response) { //Данные отправлены успешно
			result = $.parseJSON(response);
			$('#result_form').html(
				'<div><span>input1: ' + result.input1
				+ '</span><span>input2: ' + result.input2
				+ '</span></div><div><span>select1: ' + result.select1
				+ '</span><span>select2: ' + result.select2
				+ '</span><span>select3: ' + result.select3
				+ '</span><span>select4: ' + result.select4
				+ '</span><span>select5: ' + result.select5
				+ '</span></div>'
			);
		},
		error: function (response) { // Данные не отправлены
			$('#result_form').html('Ошибка. Данные не отправлены.');
		},
	});

}