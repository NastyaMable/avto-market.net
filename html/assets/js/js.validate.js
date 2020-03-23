//валидатор формы Заказать звонок
$(function(){
 $('#callСheckbox').on('change', function(){
	if($('#callСheckbox').prop('checked')){
		$('#callSubmit').attr('disabled', false);
	}else{
		$('#callSubmit').attr('disabled', true);
	}
 });
});
$(function() {
    $('#callForm').validate({
        ignore: ":disabled",
        rules: {
            callСheckbox: {
                required: true
            },
            callInputName: {
                required: true
            },
			callInputPhone: {
                required: true
            }
        },
        messages:{
			callInputName: {
                required : "Поле обязательно для заполнения"
            },
			callInputPhone: {
                required : "Поле обязательно для заполнения"
            }
        }
    });
});


//валидатор формы Контакты
$(function(){
 $('#contactСheckbox').on('change', function(){
	if($('#contactСheckbox').prop('checked')){
		$('#contactSubmit').attr('disabled', false);
	}else{
		$('#contactSubmit').attr('disabled', true);
	}
 });
});
$(function() {
    $('#contactForm').validate({
        ignore: ":disabled",
        rules: {
            contactСheckbox: {
                required: true
            },
            contactInputName: {
                required: true
            },
			contactInputNumber: {
                required: true
            }
        },
        messages:{
			contactInputName: {
                required : "Поле обязательно для заполнения"
            },
			contactInputNumber: {
                required : "Поле обязательно для заполнения"
            }
        }
    });
});
