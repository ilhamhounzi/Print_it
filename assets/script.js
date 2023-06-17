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
let arrowLeft = document.querySelector("arrow_left");

//construction of variables
let dotsClass = document.querySelector(".dots");
let bannerId = document.querySelector("#banner");
let bannerImages = document.querySelector(".banner-img");
let bannerText = bannerId.getElementsByTagName("p")[0];
let dots = [];

//Creating arrow event listeners
//Add function to allow scrolling: step 4
arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);



// Step 3: Add bullet points to the slider :
for (let i = 0; i < slides.length; i++) { // Use a 'for' loop to have as many points as slides
   	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.push(dot);//Add in the HTML
	dotsClass.appendChild(dot);//Add in the HTML
}


dots[0].classList.add("dot_selected");//Assignment of the selected point to the first slide
let spot = 0;//Create the counter variable


// Step 4: Modify the slide
function setBannerSpot(spot) {

    const imageSource = "assets/images/slideshow/" + slides[spot].image;
	bannerImages.setAttribute("src", imageSource);//Step 4: insertion of the image path.

	const imageText = slides[spot].tagLine;
	bannerText.innerHTML = imageText;//Step 4: slide text integration

    dots[spot].classList.add("dot_selected"); //Step 4: change the active bullet point to the next one;

}


//Step 4: added the function that allows you to modify the slide by clicking on the arrow
function slideRight () {

    //Allows you to have a single active point corresponding to the selected slide.
    dots[spot].classList.remove("dot_selected");

    spot = (spot < slides.length-1) ? spot+1 : 0;//Step 5: Set up conditions for infinite scrolling on the carousel

	setBannerSpot(spot);// Call the function that displays the slides
   
}


//Step 4: Added the function that allows you to modify the slide by clicking on the arrow
function slideLeft () {

	dots[spot].classList.remove("dot_selected");

	spot = (spot > 0 ) ? spot-1 : slides.length-1;//Step 5: Set up conditions for infinite scrolling

	setBannerSpot(spot);

}
	

