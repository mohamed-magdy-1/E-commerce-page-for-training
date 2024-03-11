


let add = document.querySelectorAll(".add .click");
let cunt =document.querySelector(".here .cunt p");




let arrOfCard;
    if (localStorage.products != null) {
        arrOfCard = JSON.parse(localStorage.products);
        
    }else{
        arrOfCard = [];
        
    }



//UP---------------------------------------------------------



    function textCunt() {
        let itemsL =0;
        for (let i = 0; i < arrOfCard.length; i++) {
            itemsL += +arrOfCard[i].amount;
            
    };
            localStorage.setItem("itemsLength",itemsL);
            cunt.textContent = localStorage.itemsLength;
    };
    textCunt();

//DOWN---------------------------------------------------------




add.forEach((el)=>{
el.onclick = function(){

//UP---------------------------------------------------------
setTimeout(()=>{
    textCunt()
},1000);
    
//DOWN---------------------------------------------------------











//UP---------------------------------------------------------
let cared =el.parentElement.parentElement.parentElement;
    let cardImg = cared.getElementsByTagName("img")[0].src;
    let titleCard =cared.getElementsByTagName("h4")[0].innerHTML;
    let priceCard =cared.getElementsByTagName("h5")[0].innerHTML;
    let amount = 1;

let text = {
    amount:amount,
    img: cardImg,
    title: titleCard,
    price:priceCard,
};


arrOfCard.push(text);
    localStorage.setItem("products",JSON.stringify(arrOfCard));





//DOWN---------------------------------------------------------








//UP---------------------------------------------------------
    let cuntCard = cared.getElementsByTagName("div")[2];
    let divLading = cuntCard.getElementsByTagName("div")[2];
    divLading.classList.add("catv");
    setTimeout(function(){
    divLading.classList.remove("catv");
    },2000);
//DOWN---------------------------------------------------------

};
});





// remove alert

function removeAlert(){
    let alert = document.querySelector(".alert")
    setInterval(()=>{
        alert.classList.add("removeAlert");
    },1500)
}
removeAlert()

























// //UP---------------------------------------------------------
// let cared =el.parentElement.parentElement.parentElement;
//     let cardImg = cared.getElementsByTagName("img")[0].src;
//     let titleCard =cared.getElementsByTagName("h4")[0].innerHTML;
//     let priceCard =cared.getElementsByTagName("h5")[0].innerHTML;
// let text = {
//     img: cardImg,
//     title: titleCard,
//     price:priceCard,
// };
// arrOfCard.push(text);
//     localStorage.setItem("products",JSON.stringify(arrOfCard));
// //DOWN---------------------------------------------------------


