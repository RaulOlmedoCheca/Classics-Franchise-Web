function toggleView (event) {
    /* Query the active classes involving the action and remove it */
    $('.nav-link.active').first().removeClass("active");
    $('.container.col-sm-12.active').first().removeClass("active");

    /* Add the active class to the link clicked and activate the view of the desired tab */
    event.currentTarget.classList.add("active");
    $(''+ event.currentTarget.hash).addClass("active");

}