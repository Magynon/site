$("#but1").click(function(){
    $(".bgBlur").addClass("active");
    for(i=0; i<materii.length; i++){
        $(".dropdown-menu").append(`<button class="dropdown-item" type="button" onclick="returnF($(this).html())"> ${materii[i]} </button>`);
    }
});

var titlu;

function returnF(a){
    titlu = a;
    return a;
};

$("#closePop").click(function(e){
    e.preventDefault();
    $(".bgBlur").removeClass("active");
    for(i=0; i<materii.length; i++){
        $(".dropdown-menu").empty(".dropdown-item");
    }
});

$("#incarca").click(function(e){
    var materie = $("#InputTitlu").val();

    if(titlu && materie){
        $("#popup").append(`<div class="container" id="entry">
        <div class="row firstOp">
          <p>${materie}</p>
        </div>
        <div class="row secondOp">
          <p>(${titlu})</p>
        </div>
      </div>`);
    }
    else{
        alert('Input incorect!');
    }
})

const materii = ['PC', 'USO', 'PL', 'PC', 'M1', 'M2'];