$(document).ready(function(){

    $('p').hide()

    $('#btn-resumo').click(function(e){

    e.preventDefault()
    //criar uma variavel para receber o status//
    let status = $(this).attr('data-status')

$('#btn-resumo').empty()

    if(status == '1'){
$('#btn-resumo').append('Esconder resumo')
$('#btn-resumo').attr('data-status', '2')
    }
    else{
        $('#btn-resumo').append('ver resumo')
        $('#btn-resumo').attr('data-status', '1')
    }

$('p').toggle(2000)
    })
})
