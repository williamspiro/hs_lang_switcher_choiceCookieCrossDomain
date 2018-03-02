$('.lang_switcher_class a.lang_switcher_link').click(function() {
    // Remember language link clicked
    var href = this.href;

    // Remember the langage slug for the hs_lang_switcher_choice cookie
    var selected_lang = href.split('hs_lang_switcher_choice=')[1].split('&')[0];

    // Find the apex domain for use in the cookie domain
    var cookieDomain = '.' + document.domain.split('.').reverse().splice(0,2).reverse().join('.')

    // Don't follow the link
    event.preventDefault();

    // Create cookie to be dropped on the origin language selection domain
    document.cookie = "hs_lang_switcher_choice=" + selected_lang + ";path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;domain=" + cookieDomain; 

    // Go to the language link which was clicked
    window.location = href;
});