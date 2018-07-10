document.addEventListener("DOMContentLoaded", function() {
    load_navpane();
    lightGallery(document.getElementsByClassName('md-content'));
});

function load_navpane() {
    var width = window.innerWidth;
    if (width <= 1200) {
        return;
    }

    var nav = document.getElementsByClassName("md-nav");
    for(var i = 0; i < nav.length; i++) {
        if (typeof nav.item(i).style === "undefined") {
            continue;
        }

        if (nav.item(i).getAttribute("data-md-level") && nav.item(i).getAttribute("data-md-component")) {
            nav.item(i).style.display = 'block';
            nav.item(i).style.overflow = 'visible';
        }
    }

    var nav = document.getElementsByClassName("md-nav__toggle");
    for(var i = 0; i < nav.length; i++) {
       nav.item(i).checked = true;
    }
}

//Track Outbound Link Clicks

(function trackOutbounds() {
        
    var hitCallbackHandler = function(url,win) {
        if (win) {
                window.open(url, win);
        } else {
            window.location.href = url;
    }
};

var addEvent = function(el, eventName, handler) {

            if (el.addEventListener) {
                    el.addEventListener(eventName, handler);
                    } else {
                    el.attachEvent('on' + eventName, function(){
                            handler.call(el);
                });
            }
    }
    
    if (document.getElementsByTagName) {
            var el = document.getElementsByTagName('a');
            var getDomain = document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0];
            
            // Look thru each a element
            for (var i=0; i < el.length;i++) {
            
                    // Extract it's href attribute
                    var href = (typeof(el[i].getAttribute('href')) == 'string' ) ? el[i].getAttribute('href') : '';
                    
                    // Query the href for the top level domain (xxxxx.com)
                    var myDomain = href.match(getDomain);
                    
                    // If link is outbound and is not to this domain        
                    if ((href.match(/^(https?:|\/\/)/i)  && !myDomain) || href.match(/^mailto\:/i)) {
                    
                            // Add an event to click
                            addEvent(el[i],'click', function(e) {
                                    var url = this.getAttribute('href'), win = (typeof(this.getAttribute('target')) == 'string') ? this.getAttribute('target') : '';
                                                    
                                                    console.log ("add event", url);
                                    // Log even to Analytics, once done, go to the link
                                    ga('send', 'event', 'outbound', 'click', url,
                                            {'hitCallback': hitCallbackHandler(url,win)},
                                            {'nonInteraction': 1}
                                    );
                                    
                                    e.preventDefault();
                            });
                    }
            }
    }
})();