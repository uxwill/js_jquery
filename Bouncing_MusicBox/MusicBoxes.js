//alert("here"); //testing

$(document).ready(function() {
    var duckSound = document.getElementById('duck');
    
    $('#duckQuack').mousedown(function(){
    duckSound.currentTime = 0;
    duckSound.play();
    });

    var cowSound = document.getElementById('cow');
    
    $('#cowMoo').mousedown(function(){
    cowSound.currentTime = 0;
    cowSound.play();
    });


    var chickenSound = document.getElementById('chicken');
    
    $('#chickenCluck').mousedown(function(){
    chickenSound.currentTime = 0;
    chickenSound.play();
    });


    $.fn.bounce = function(options) {
    
    var settings = $.extend({
        speed: 10
    }, options);

    return $(this).each(function() {
        
        var $this = $(this),
            $parent = $this.parent(),
            height = $parent.height(),
            width = $parent.width(),
            top = Math.floor(Math.random() * (height / 2)) + height / 4,
            left = Math.floor(Math.random() * (width / 2)) + width / 4,
            vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
            vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

        // place initialy in a random location
        $this.css({
            'top': top,
            'left': left
        }).data('vector', {
            'x': vectorX,
            'y': vectorY
        });

        var move = function($e) {
            
            var offset = $e.offset(),
                width = $e.width(),
                height = $e.height(),
                vector = $e.data('vector'),
                $parent = $e.parent();

            if (offset.left <= 0 && vector.x < 0) {
                vector.x = -1 * vector.x;
            }
            if ((offset.left + width) >= $parent.width()) {
                vector.x = -1 * vector.x;
            }
            if (offset.top <= 0 && vector.y < 0) {
                vector.y = -1 * vector.y;
            }
            if ((offset.top + height) >= $parent.height()) {
                vector.y = -1 * vector.y;
            }

            $e.css({
                'top': offset.top + vector.y + 'px',
                'left': offset.left + vector.x + 'px'
            }).data('vector', {
                'x': vector.x,
                'y': vector.y
            });
            
            setTimeout(function() {
                move($e);
            }, 50);
            
        };
        
        move($this);
    });

};

$(function() {
    $('#duckQuack').bounce({
        'speed': 7
    });

$('#cowMoo').bounce({
        'speed': 5
    });

$('#chickenCluck').bounce({
        'speed': 3
    });

});

});

