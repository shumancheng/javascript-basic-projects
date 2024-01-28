let count =0;

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function(btn){
    btn.addEventListener("click", function(a){
        const styles = a.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
    })
})