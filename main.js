feather.replace();
$('.sidebar-toggle').click(function() {
    $('.sidebar').toggleClass('show');
    $('body').toggleClass('nav-hide');
});
$('.select2').select2();
function toaster(title, message , autohide = true) {
    var html = "<div class='toast fade show' role='alert' aria-live='assertive' aria-atomic='true' data-autohide='"+autohide+"'>"+
    "<div class=\"toast-header\"><strong class=\"mr-auto\">"+title+"</strong>"+
    "<button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">"+
    "<span aria-hidden=\"true\">&times;</span></button></div>"+
    "<div class=\"toast-body\">"+message+"</div></div>";

    $('.toast-container').append(html);
}