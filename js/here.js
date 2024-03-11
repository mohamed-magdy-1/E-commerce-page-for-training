
let cunt =document.querySelector(".here .cunt p");
let total = document.querySelector(".total")

let place = document.querySelector(".place-order")

let lotOfCard = localStorage.getItem("products");
let CardData = JSON.parse(lotOfCard);







//UP---------------------------------------------------------
//  don't rebate the card
for (let i = 0; i < CardData.length; i++) {
    for (let j = i + 1; j < CardData.length; j++) {
        if(CardData[i].img === CardData[j].img && CardData[i].price === CardData[j].price){
            CardData[i].amount = +CardData[i].amount + +CardData[j].amount ;
        };
        
    };
    
};


let finalArray = [];
for (let i = 0; i < CardData.length; i++) {
    for (let j = i + 1; j < CardData.length; j++) {
        if (CardData[i].img === CardData[j].img && CardData[i].price === CardData[j].price) {
            CardData[j].amount = 0 ;
        };
    };
            if (CardData[i].amount !== 0) {
            finalArray.push(CardData[i]);
        };
};
localStorage.setItem("products", JSON.stringify(finalArray));


//DOWN---------------------------------------------------------
function showData(){
    let table = '';
for (let i = 0; i < finalArray.length; i++) {
            table +=`
            <tr data-i="${i}">
                <td><button class="remove" onclick="delateData(${i})" style="cursor: pointer; user-select: none;">x</button></td>
                <td><img src="${finalArray[i].img}" alt="photo"></td>
                <td>${finalArray[i].title}</td>
                <td><input oninput="changePrice()"  type="number"  value="${finalArray[i].amount}"></td>
                <td>$${ +finalArray[i].amount * finalArray[i].price}</td>
            </tr>
            `;
};
document.querySelector(".table1").innerHTML = table;
};
showData();


//UP---------------------------------------------------------
function changePrice(){
let input =document.querySelectorAll(" tr td input");
input.forEach((el)=>{
if (el.value < 1) {el.value = 1;};
let iOfFinalArray =el.parentElement.parentElement.dataset.i;
finalArray[iOfFinalArray].amount = el.value;
localStorage.setItem("products", JSON.stringify(finalArray));
TotalPrice();
textCunt();
showData();
});
};
//DOWN---------------------------------------------------------











//UP---------------------------------------------------------
function textCunt() {
    let itemsL =0;
    for (let i = 0; i < finalArray.length; i++) {
        itemsL += +finalArray[i].amount;
};
        localStorage.setItem("itemsLength",itemsL);
        cunt.textContent = localStorage.itemsLength;
};
textCunt();
//DOWN---------------------------------------------------------





//UP---------------------------------------------------------

function delateData(el){
    finalArray.splice(el,1);
    localStorage.products = JSON.stringify(finalArray);
    TotalPrice();
    textCunt();
    showData();
};
//DOWN---------------------------------------------------------









function TotalPrice() {
    let priceTo =0;
    for (let i = 0; i < finalArray.length; i++) {
        priceTo += +finalArray[i].amount * +finalArray[i].price;
};
localStorage.setItem("TotalPrice",priceTo);
total.textContent = localStorage.TotalPrice;

};
TotalPrice();


// play sound on n HTML page

function playSound(audioName) {
    let audio =new Audio(audioName);
    audio.play();
}

place.onclick = function(){
    playSound("نغمه فودافون كاش (256  kbps) (shabakngy.com).mp3");
Swal.fire({
    template: 'place-order',
    position: 'center',
    icon: 'success',
    title: 'Done successfully.',
    showConfirmButton: false,
    timer: 1500
});
localStorage.clear()
cunt.textContent = 0;
total.textContent = 0;
document.querySelector(".table1").innerHTML  = "";

};



