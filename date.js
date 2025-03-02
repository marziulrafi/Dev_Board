const x = document.createElement("p");
x.innerHTML = `<p id="day" class="font-medium text-[1rem]">
                ${new Date().toLocaleDateString("en-US", { weekday: "long" })} <br />
                <span id="date" class="font-bold"> ${new Date().toLocaleDateString()} </span>
              </p>`
document.getElementById("calender").appendChild(x);