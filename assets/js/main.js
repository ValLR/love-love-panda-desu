var img1 = new Image();
var div1 = document.getElementById("img1");

img1.onload=function(){
	div1.appendChild(img1);
};

var img2= new Image();
var div2=document.getElementById("img2");

img2.onload=function(){
	div2.appendChild(img2);
}

img1.src="assets/img/uno.jpg"
img2.src="assets/img/dos.jpg"


var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

/*var gal1=document.createElement("IMG");
gal1.setAttribute("src", pictures[0]);
	gallery.setAttribute("id","gal1");
	var div = document.getElementById("galeria");
	div.appendChild(gallery)*/

function img(){
	var gallery=document.createElement("img");
	for(var i=0;i<pictures.length;i++){
	gallery.setAttribute("src", pictures[i]);
	gallery.setAttribute("id","gal"+i);
	var div = document.getElementById("gal"+i);
	div.appendChild(gallery)
	}
}
img();