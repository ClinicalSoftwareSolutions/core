OC.notify = {
    unreadNumber: 0,
    lastUpdateTime: 0,
    autoRefresh: true
};

$(document).ready(function() {
    //FIXME test:
    $("#notify-counter").removeClass("hidden").text(Math.floor(Math.random()*100));
    $("#notify-icon").click(function(event) {
        $("#notify-list").slideToggle();
        event.preventDefault();
        event.stopPropagation();
    });
    $(window).click(function() {
        $("#notify-list").slideUp();
    });
});
