let cond_form = document.getElementById('cond_form');
cond_form.addEventListener("submit", function(e){
    e.preventDefault();

    if(user_input.value >= 70 && user_input.value <= 100){
        document.write("A excellent")
    }else
    if(user_input.value >= 60 && user_input.value <= 69){
        document.write("B very good")
    }else
    if(user_input.value >= 50 && user_input.value <= 59){
        document.write("C Average")
    }else
    if(user_input.value >= 40 && user_input.value <= 49){
        document.write("D pass")
    }else
    if(user_input.value >= 0 && user_input.value <= 39){
        document.write("F fail")
    }
})