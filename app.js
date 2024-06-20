function alertButton() {
    alert("Hello world")
}

function onTileClick() {
    alert("Hello world")
}

function selectOnlyFinanzen(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Finanzen" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyBeruf(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Beruf" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyGesundheit(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Gesundheit" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyBeziehung(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Beziehung" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function changeFinanzenTile(element){
    element.classList.toggle("popup-tile");
    document.getElementById("FinanzenCheckbox").style.visibility = 'visible';
}

function changeBerufTile(element){
    element.classList.toggle("popup-tile");
    document.getElementById("BerufCheckbox").style.visibility = 'visible';
}

function changeGesundheitTile(element){
    element.classList.toggle("popup-tile");
    document.getElementById("GesundheitCheckbox").style.visibility = 'visible';
}

function changeBeziehungTile(element){
    element.classList.toggle("popup-tile");
    document.getElementById("BeziehungCheckbox").style.visibility = 'visible';
}

function resetAllCheckboxes(){
    document.getElementById("BeziehungCheckbox").style.visibility = 'hidden';
    document.getElementById("GesundheitCheckbox").style.visibility = 'hidden';
    document.getElementById("BerufCheckbox").style.visibility = 'hidden';
    document.getElementById("FinanzenCheckbox").style.visibility = 'hidden';

    for (var i = 1;i <= 4; i++)
        {
            document.getElementById("Beruf" + i).checked = false;
            document.getElementById("Finanzen" + i).checked = false;
            document.getElementById("Gesundheit" + i).checked = false;
            document.getElementById("Beziehung" + i).checked = false;
        }
}

document.getElementById("HappinessLink").onclick = function () {
    location.href = "happiness_tiles.html";
};

document.getElementById("CashflowLink").onclick = function () {
    location.href = "cashflow_tiles.html";
};

function goToHappinessTilesSite(){
    
    location.href = "happiness_tiles.html";
}

function goToCashflowTilesSite(){
    location.href = "cashflow_tiles.html";
}
