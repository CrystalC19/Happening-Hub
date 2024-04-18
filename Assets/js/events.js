const apiKey = '01c8fbfaf9d829746d68c319ac15cabf4fa12604a0728cbe6565fe6a1b3976fe'

// Adding click Event listeners to pictures and changing location to specified URL



// SportEvent
const sportEventPic = document.getElementById('sport-events');
sportEventPic.addEventListener('click', function() {
    var url= `https://serpapi.com/search.html?engine=google_events&q=top+sport+events+&gl=us&hl=en&${apiKey}`;
    window.open(url,"_blank");


    //window.location.href = `https://serpapi.com/search.html?engine=google_events&q=top+sport+events+&gl=us&hl=en&${apiKey}`
    
});
// CharityEvent
const charityEventPic = document.getElementById(`charity-events`);
charityEventPic.addEventListener(`click`, function(){
    var url= `https://serpapi.com/search.html?engine=google_events&q=charity+events+&gl=us&hl=en&${apiKey}`;
    window.open(url,"_blank");



    //window.location.href= `https://serpapi.com/search.html?engine=google_events&q=charity+events+&gl=us&hl=en&${apiKey}`;
});

// FilmFestival
const filmFestivalPic = document.getElementById(`filmfestivals-events`);
filmFestivalPic.addEventListener(`click`,function(){
    var url= `https://serpapi.com/search.html?engine=google_events&q=film+festivals&gl=us&hl=en&${apiKey}`;
    window.open(url,"_blank");



//window.location.href= `https://serpapi.com/search.html?engine=google_events&q=film+festivals&gl=us&hl=en&${apiKey}`;
});
 
//Nearby Events Dallas
const nearbyDallas = document.getElementById(`dallas-nearby`);
nearbyDallas.addEventListener(`click` , function(){
    var url= `https://serpapi.com/search.html?engine=google_events&q=Nearby+Events+in+Dallas&gl=us&hl=en&${apiKey}`;
    window.open(url,"_blank");




   // window.location.href= `https://serpapi.com/search.html?engine=google_events&q=Nearby+Events+in+Dallas&gl=us&hl=en&${apiKey}`;
});

// Nearby Events Frisco
const nearbyFrisco = document.getElementById(`frisco-nearby`);
nearbyFrisco.addEventListener(`click` , function() {
    var url= `https://serpapi.com/search.html?engine=google_events&q=Nearby+Events+in+Frisco&gl=us&hl=en&${apiKey}`;
    window.open(url,"_blank");

    //window.location.href= `https://serpapi.com/search.html?engine=google_events&q=Nearby+Events+in+Frisco&gl=us&hl=en&${apiKey}`;
    
});

//Nearby Events Fort Worth
const nearbyFortWorth = document.getElementById(`ftw-nearby`);
nearbyFortWorth.addEventListener(`click` , function() {
    var url= `https://serpapi.com/search.html?engine=google_events&q=Events+in+FortWorth&gl=us&hl=en&${apiKey}`;
    window.open(url,"_blank");


   // window.location.href= `https://serpapi.com/search.html?engine=google_events&q=Events+in+FortWorth&gl=us&hl=en&${apiKey}`;

});