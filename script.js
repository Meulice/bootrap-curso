$(document).ready(function(){
     //progress Bar

     let containerA = document.getElementById("circleA");

     let circleA = new ProgressBar.circle(containerA, {
       
        color:'#64DAF9',
        strokewidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color:'#64DAF9'},

        step: function(state, circle){
   
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);

        }
     });
     let containerB = document.getElementById("circleB");

     let circleB = new ProgressBar.circle(containerB, {
       
        color:'#64DAF9',
        strokewidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color:'#64DAF9'},

        step: function(state, circle){
   
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);

        }
     });
     let containerC = document.getElementById("circleC");

     let circleC = new ProgressBar.circle(containerC, {
       
        color:'#64DAF9',
        strokewidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color:'#64DAF9'},

        step: function(state, circle){
   
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);

        }
     });
     let containerD = document.getElementById("circleD");

     let circleD = new ProgressBar.circle(containerD, {
       
        color:'#64DAF9',
        strokewidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color:'#64DAF9'},

        step: function(state, circle){
   
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);

        }
     });

     //inciando o loader quando o usuario chega ao elemento

     let dataAreaOffset = $('#data-area').offeset();
     let stop = 0;

     $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

         if(scroll > (dataAreaOffset.top - 500) && stop == 0){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        } 

     });

    // Parallx
     setTimeout(function() {
         $('#data-area').parallax({imageSrc: 'image/cidadeparallax.png'});
     },250);

});