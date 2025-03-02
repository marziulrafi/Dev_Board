document.getElementById("theme-btn").addEventListener("click",
    function(){
        const body = document.getElementById("body");
        const letters = "0123456789ABCDEF";
        let color = "#";
            for(let i=0;i<6;i++){
                color += letters[Math.floor(Math.random()*16)];
            }
        body.style.backgroundColor = color;
    }
)