const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*Etape 2: Add Event Listeners on arrows */
let arrowRight = document.querySelector(".arrow_right");
let arrowLeft = document.querySelector(".arrow_left");

//construction of variables
let dotsClass = document.querySelector(".dots");
let bannerId = document.querySelector("#banner");
let bannerImages = document.querySelector(".banner-img");
let bannerText = bannerId.getElementsByTagName("p")[0]; 

let dots = [];  

arrowLeft.addEventListener("click", () => click("left"));
arrowRight.addEventListener("click", () => click("right"));


// Step 3: Add bullet points to the slider
 for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.push(dot); 
	dotsClass.appendChild(dot) 
  }
  
dots[0].classList.add("dot_selected"); 
let spot = 0;//Création de la variable du compteur


// Step 4: Modify the slide
function setBannerSpot(spot) {

	const imageSource = "assets/images/slideshow/" + slides[spot].image;
	bannerImages.setAttribute("src", imageSource);	/*Step 4: insertion of the image path.*/

	/*Step 4: slide text integration*/
	const imageText = slides[spot].tagLine; 
	bannerText.innerHTML = imageText; /*slide text integration*/

	// Ajout du point sélectionné à la nouvelle slide
	dots[spot].classList.add("dot_selected"); /*Step 4: change the active bullet point to the next one;*/
}

//Step 4: Change on button click;
function click (position) {

    dots[spot].classList.remove("dot_selected");
    position = (position === "right") ? slideRight() : slideLeft();
	setBannerSpot(spot);
}


/*Step 5: Set up conditions for infinite scrolling on the carousel*/
function slideRight () {

	spot = (spot < slides.length-1) ? spot+1 : 0;
}
	
function slideLeft () {

	spot = (spot > 0 ) ? spot-1 : slides.length-1;	
}


