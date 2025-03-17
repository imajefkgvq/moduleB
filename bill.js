async function show() {
    const responce = await fetch("service_usages.csv")
    const data = await responce.text()
    const rows = data.split("\n")
    const second = rows.slice(3, 71);
    const first = rows.slice(76,105)
   
      total = 0;
      total2 = 0
    second.forEach((row) => {
      const second = row.split(",").map((value) => value.replace(/"/g, ""));

      console.log(second);
    

      const data = (second[3] * second[6]);
      total += data
      
      
     
      document.querySelector(".production").innerHTML += `
            <div class="line">
                <div class="line-left">
                    <h3>Service #1</h3>
                </div>
                <div class="line-right">
                    <p>${second[3]}s</p>
                    
                    <p>${second[6]}s</p>
                    <p>$${data.toFixed(3)}</p>
                </div>
            </div>
        `;
    });
        first.forEach((row) => {
          const first = row.split(",").map((value) => value.replace(/"/g, ""));

          console.log(first);

          const data = first[3] * first[6];
          total2 += data
          total +=total2
          document.getElementById("total").textContent = total;
          

          document.querySelector(".development").innerHTML += `
            <div class="line">
                <div class="line-left">
                    <h3>Service #1</h3>
                </div>
                <div class="line-right">
                    <p>${first[3]}s</p>
                    
                    <p>${first[6]}s</p>
                    <p>$${data.toFixed(3)}</p>
                </div>
            </div>
        `;
        });
    
}
show()