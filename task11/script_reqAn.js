$(function () {

    var anim_id; 
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var restart_btn = $('#restart_btn');   
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('left'));
    var pole_width = parseInt(pole.width());
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var bird_width = parseInt(bird.width());
    var go_up = false;
    var go_down = true;
    var game_over = false;
    var score1=0;
    var score2=0;  
    var bleft;
    var pleft;
    var bird_go = 'down';
    var bird_right_left = 'right';
    var top_angle = 6; 
    var right_left_angle = 0;  
    var move_right = false;
    var move_left = false;
    var move_right1 = false;
    var move_left1 = false;
    var who_won;    

    if (score1 <=100 || score2 <=100){
    function repeat() {

        if (game_over === false) {

            if (collision(bird, pole_1)) {
                score1+=1;
                bleft = parseInt(bird.css('left')) + bird_width / 2;
                pleft = parseInt(pole_1.css('left')) + pole_width / 2;
                bird_right_left = (bleft > pleft ? 'right' : 'left');
                right_left_angle = Math.abs((pleft - bleft)) / 7; 
                bird_go = 'down';


            } else if (collision(bird, pole_2)) {

                score2+=1;
                bleft = parseInt(bird.css('left')) + bird_width / 2;
                pleft = parseInt(pole_2.css('left')) + pole_width / 2;
                bird_right_left = (bleft > pleft ? 'right' : 'left');
                right_left_angle = Math.abs((pleft - bleft)) / 7; 
                bird_go = 'up';

            } else
            if (parseInt(bird.css('left')) <= 0) {

                bird_right_left = 'right';

            } else if (parseInt(bird.css('left')) >= container_width - bird_width) {

                bird_right_left = 'left';

            } else if (parseInt(bird.css('top')) <= 0) {

    
                who_won = 1;
                stop_the_game();

            } else if (parseInt(bird.css('top')) >= (container_height - bird_height)) {

                
                who_won = 2;
                stop_the_game();

            }

            if (bird_go === 'down') {
                bird_down();
            } else if (bird_go === 'up') {
                bird_up();
            }

            anim_id = requestAnimationFrame(repeat);

        }
    }
    }
    anim_id = requestAnimationFrame(repeat);

    function left() {
        if (parseInt(pole_2.css('left')) > 0) {
            pole_2.css('left', parseInt(pole_2.css('left')) - 15);
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {
        if (parseInt(pole_2.css('left')) < (container_width - pole_width)) {
            pole_2.css('left', parseInt(pole_2.css('left')) + 15);
            move_right = requestAnimationFrame(right);
        }
    }

    function left1() {
        if (parseInt(pole_1.css('left')) > 0) {
            pole_1.css('left', parseInt(pole_1.css('left')) - 15);
            move_left1 = requestAnimationFrame(left1);
        }
    }

    function right1() {
        if (parseInt(pole_1.css('left')) < (container_width - pole_width)) {
            pole_1.css('left', parseInt(pole_1.css('left')) + 15);
            move_right1 = requestAnimationFrame(right1);
        }
    }



    $(document).on('keydown', function (e) {
        var key = e.keyCode;
        if (key === 37 && move_left === false && game_over === false) {
            move_left = requestAnimationFrame(left);
        } else if (key === 39 && move_right === false && game_over === false) {
            move_right = requestAnimationFrame(right);
        } else if (key === 65 && move_left1 === false && game_over === false) {
            move_left1 = requestAnimationFrame(left1);
        } else if (key === 68 && move_right1 === false && game_over === false) {
            move_right1 = requestAnimationFrame(right1);
        }
    });



    $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 37 && game_over === false) {
            cancelAnimationFrame(move_left);
            move_left = false;
        } else if (key === 39 && game_over === false) {
            cancelAnimationFrame(move_right);
            move_right = false;
        } else if (key === 65 && game_over === false) {
            cancelAnimationFrame(move_left1);
            move_left1 = false;
        } else if (key === 68 && game_over === false) {
            cancelAnimationFrame(move_right1);
            move_right1 = false;
        }
    });


    function bird_up() {
        bird.css('top', parseInt(bird.css('top')) - (top_angle));
        if (bird_right_left === 'left') {
            bird.css('left', parseInt(bird.css('left')) - (right_left_angle));
        } 
        else {
            bird.css('left', parseInt(bird.css('left')) + (right_left_angle));
        }
    }

    function bird_down() {
        bird.css('top', parseInt(bird.css('top')) + (top_angle));
        if (bird_right_left === 'left') {
            bird.css('left', parseInt(bird.css('left')) - (right_left_angle));
        } 
        else {
            bird.css('left', parseInt(bird.css('left')) + (right_left_angle));
        }
    }





    function stop_the_game() {

        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_right1);
        cancelAnimationFrame(move_left1);
        game_over = true;
        restart_btn.html('<span>Game won by player ' + who_won + ' </span><br><br><span id="winner">Restart game</span><br><br><span></span><br>').show();

    

    }

    $(document).on('click', '#winner', function () {
        location.reload();
    });

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



});
