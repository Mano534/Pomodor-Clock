    let time = 25 * 60 * 1000 ; 

$(document).ready(function(){
    
    
    /*________________*/
    /* Varables */
    /*________________*/
    
    // let time = 25 * 60 * 1000 ; 
    let mode = "session";
    let sessionValue = 25 ; 
    let breakValue = 5 ; 
    let active = false;
    let pomodor ;

    if(mode === "session"){
        time = sessionValue * 60 * 1000 ; 

    }else{
        time = breakValue * 60 * 1000 ; 
    }
    // document.addEventListener('click',()=> console.log('works'))
    
    


    $('#timer-label').text(mode === 'session' ? 'session' : "break");
    $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
    $('#break-length').text(breakValue);
    $('#session-length').text(sessionValue);
    $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )

    let peeb = document.getElementById('beep');
    // console.log(peeb);
    /* buttons */

    // console.log(peeb.play())









    $("#break-increment").on('click', function(){
        if(breakValue === 0 || breakValue === 60) return ;
        breakValue += 1 ; 
        $("#break-length").text(breakValue);
        if(mode === 'break'){
        time = breakValue * 60 * 1000 ; 
    $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
        active = false ; 
        clearInterval(pomodor);
        $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
    }
    })
    $("#break-decrement").on('click', function(){
        if(breakValue === 1 || breakValue === 61) return
        breakValue -= 1 ; 
        $("#break-length").text(breakValue);
        if(mode === "break"){
            time = breakValue * 60 * 1000 ; 
    $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
        active = false ; 
        clearInterval(pomodor);
        $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
    }

    })
    $("#session-increment").on('click', function(){
        if(sessionValue === 0 || sessionValue === 60) return ;
        sessionValue += 1
        $('#session-length').text(sessionValue);
        if(mode === 'session'){
            time = sessionValue * 60 * 1000; 
        $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
            active = false ; 
            clearInterval(pomodor);
            $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
        }


    })
    $("#session-decrement").on('click', function(){
        if(sessionValue === 1 || sessionValue === 59) return
        sessionValue -= 1
        $('#session-length').text(sessionValue);
    if(mode === "session"){
        time = sessionValue * 60 * 1000 ; 

    $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
        active = false ; 
        clearInterval(pomodor);
        $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
    }
    })



    
    $('#start_stop').on('click' , ()=>{
        if(active === false){
            active = true ; 
             pomodor = setInterval( ()=>{
                time  -= 1000 ; 
            $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
                
                /*__________________________________________________________
                Update each second 
                ___________________________________________________________*/

                if(time < 0 && mode === "session"){
                    time = breakValue * 60 * 1000 ; 
                    // peeb.play();
                    peeb.play();
                    mode = "break" ; 
                    $('#timer-label').text(mode === 'session' ? 'session' : "break");
                $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
                }
                if(time < 0 && mode === "break"){
                    time = sessionValue * 60 * 1000 ; 
                    mode = "session" ; 
                    // peeb.play();
                    peeb.play();
                    $('#timer-label').text(mode === 'session' ? 'session' : "break");
                $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
                }

                
                /*_________________________________________________________*/


            } ,1000)
            $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
        }else{
            active = false ; 
            clearInterval(pomodor);
            $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
        }

    })
    $('#reset').on('click' , function(){
        time = 25 * 60 * 1000 ; 
        sessionValue = 25 ;
        breakValue = 5 ; 
        active = false ; 
        mode = "session" ; 
        peeb.load();
        // peeb.load();

        $('#timer-label').text(mode === 'session' ? 'session' : "break");
    $('#time-left').text((time === 60*60*1000)? "60:00": moment(time).format('mm:ss'));
        $('#break-length').text(breakValue);
        $('#start_stop').html(active === true? "\u275A\u275A" : "<span class='rotated'>\u25C0</span>" )
        $('#session-length').text(sessionValue);
        clearInterval(pomodor);
    })
})
