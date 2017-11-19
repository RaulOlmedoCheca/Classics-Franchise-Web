function toggleView (event) {
    $('.nav-link.active').first().removeClass("active");
    $('.container.col-sm-12.active').first().removeClass("active");

    event.currentTarget.classList.add("active");
    $(''+ event.currentTarget.hash).addClass("active");

}