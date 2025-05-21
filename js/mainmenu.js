$(document).ready(function() {
    var navoffeset = $("nav").offset().top;
    $(window).scroll(function() {
        var scrollpos = $(window).scrollTop();
    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".topheader").addClass("scrolled");
        $(".menu_main").addClass("scrolled");
        $(".bannerwrap").addClass("scrolled");
    }
    if (scroll <= 100) {
        $(".topheader").removeClass("scrolled");
        $(".menu_main").removeClass("scrolled");
        $(".bannerwrap").removeClass("scrolled");
    }
});


//-------------

var mc = window.matchMedia("(max-width: 800px)");
mc.addListener(resizeWidth);
resizeWidth(mc);

function resizeWidth(pMatchMedia) {
    if (pMatchMedia.matches) {
        //小於800時執行
        $(function() {
            var Accordion = function(el, multiple) {
                this.el = el || {};
                this.multiple = multiple || false;

                // Variables privadas
                var links = this.el.find('.link');
                // Evento
                links.on('click', {
                    el: this.el,
                    multiple: this.multiple
                }, this.dropdown)
            }

            Accordion.prototype.dropdown = function(e) {
                var $el = e.data.el;
                $this = $(this),
                    $next = $this.next();

                $next.slideToggle();
                $this.parent().toggleClass('open');

                if (!e.data.multiple) {
                    $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                };
            }

            var accordion = new Accordion($('#main_mm'), false);
        });
    }
};

//-------------

var mm = window.matchMedia("(min-width: 801px)");
mm.addListener(resizeWidth2);
resizeWidth2(mm);

function resizeWidth2(pMatchMedia) {
    if (pMatchMedia.matches) {
        //大於801時執行
        $(function() {
            $(".searchbox").on('click', function() {
                $(this).toggleClass("block");
            });
            $(".searchbox .submenu").on('click', function() {
                $(this).toggleClass("block");
            });
        });
    }
};