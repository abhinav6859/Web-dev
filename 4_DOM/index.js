 //document.querySelector("h1").innerHTML ="good bye.";

//  const a=document.getElementById("p1");

// a.innerHTML = "New Heading";
 
document.getElementById("p1").innerHTML = "New Heading";

document.body.querySelector("ul").lastElementChild.innerHTML="abhinav vats";

// click input
document.body.querySelector("input").click();


document.body.querySelector("ul").lastElementChild.style.color="purple";

var a=document.getElementsByTagName("li").length;
// a=3   Because three li presents here

// change background color of button 
document.body.querySelector("button").style.backgroundColor ="green";

// add a class from js in button
document.querySelector("button").classList.add("invisible");
//document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");


// select text of selector
document.querySelector("h1").textContent;
document.querySelector("h1").innerHTML="<em>good bye</em>"; 

//change attribute
document.querySelector("a").setAttribute("href","https://www.bing.com");

