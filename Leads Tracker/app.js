let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-btn");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads);

    console.log(myLeads)
})


const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"));

console.log(leadsfromlocalstorage)

if(leadsfromlocalstorage) {
    myLeads = leadsfromlocalstorage;
    render(myLeads)
}

deleteEl.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = []
    render(myLeads)
})

function render(leads){
    let listitems = "";
    for(let i = 0;i<leads.length;i++){
    listitems += `<li> 
    <a target = '_blank' href='${leads[i]}'>
         ${leads[i]}
    </a>
    </li>`;
}

ulEl.innerHTML = listitems;
}

localStorage.clear();


