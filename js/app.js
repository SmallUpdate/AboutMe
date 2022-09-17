let icon = $('#js_icon')
let js_menu = $('#js_menu')
let links = $('#js_links')
//console.log(links)

$(icon).on('click', function() {
    icon.toggleClass("ac");
    js_menu.toggleClass("hidden");
    icon.toggleClass("icon_fixed");
})