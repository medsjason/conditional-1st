let cond_form = document.getElementById('cond_form');
cond_form.addEventListener("submit", function(e){
    e.preventDefault();

    if(user_input.value >= 70 && user_input.value <= 100){
        result.innerHTML ="A excellent"
    }else
    if(user_input.value >= 60 && user_input.value <= 69){
        result.innerHTML ="B very good"
    }else
    if(user_input.value >= 50 && user_input.value <= 59){
        result.innerHTML ="C average"
    }else
    if(user_input.value >= 40 && user_input.value <= 49){
        result.innerHTML ="D pass"
    }else
    if(user_input.value >= 0 && user_input.value <= 39){
        result.innerHTML ="F fail"
    }
})