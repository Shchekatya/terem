$( ".btn-primary" ).click(function( event ) {
    event.preventDefault(); 
  });

$('form').submit(function(event) {
    event.preventDefault(); 

    let dataForm = $(this);
    $.post(
        dataForm.attr('action'),
        dataForm.serialize()
    )

});