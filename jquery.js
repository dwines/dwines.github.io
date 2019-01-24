var price = $(".price").attr("data_value");
var i=0;
function adcart (argument){
    i++;
    document.getElementById("price").innerHTML="Total Price"+i*price;
   
}
$("button").click(function(){
    document.getElementById("select").innerHTML="selected item"
    +i;
});