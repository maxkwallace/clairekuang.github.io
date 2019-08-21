var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
document.getElementById("time").innerHTML = d.getHours().concat(":",d.getMinutes());

$(function () {
    $('.navbar-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});
