var res = fetch("https://hp-api.onrender.com/api/characters");
res.then((data)=>data.json()).then((data1)=>data(data1));

    function data(data1){
        for(var i in data1){
            console.log(data1[i]);
    var div = document.createElement("div");
    div.innerHTML=`<div class="card-deck">
    <div class="card">
    <img src="${data1[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${data1[i].name}</h5>
      <p class="card-text">Actor: ${data1[i].actor}</p>
      <p class="card-text">House:${data1[i].house}</p>
    <div class="card-footer">
      <small class="text-muted">Wand: ${data1[i].wand.core}</small>
    </div>
  </div>`
  document.body.append(div);

}};
