let container = document.getElementById("root")

let count=0

function addNumbers(){

    for(let i=0;i<25;i++){

        let item = document.createElement("div")
        count++
        item.innerHTML=`<h3>number ${count}</h3>`
        item.className="innerbox"
        container.appendChild(item)
    }
}

addNumbers()




container.addEventListener("scroll",function(){
    
    if(container.scrollTop+container.clientHeight>=container.scrollHeight){
        addNumbers()
    }
})