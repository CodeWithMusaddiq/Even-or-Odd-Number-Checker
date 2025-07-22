h1=document.querySelector("h1");
input=document.querySelector("input")
btn=document.querySelector("button");
para=document.querySelector("p");


btn.addEventListener("click",()=>{
num=input.value;
if(num%2==0){
    para.innerText="Even Number"
}
else if(num%2!=0){
   para.innerText="Odd Number"
}

});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});