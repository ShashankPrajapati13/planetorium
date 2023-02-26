var earth = document.querySelector("#earth")
var mars = document.querySelector("#mars")
var mercury = document.querySelector("#mercury")
var venus = document.querySelector("#venus")
var main1 = document.querySelector("#main1")
var h1 = document.querySelector("#main1 #txt h1")
var a = document.querySelector("#a")
var b = document.querySelector("#b")
var txt1 = document.querySelector("#main1 #txt")
var txt2 = document.querySelector("#main2 #txt")


var state=0;
var flag=0;
var temp=0;

main1.addEventListener("click",function(dets){
    if(state===0) {
        if(dets.target.id==="mars") {
            earth.style.top="50%";
        earth.style.left="5%";
        earth.style.height="100px";
        mars.style.top="150%";
        mars.style.left="50%";
        mars.style.height="180%";
        venus.style.top="35%";
        venus.style.left="50%";
        venus.style.height="0px";
        mercury.style.top="50%";
        mercury.style.left="95%";
        mercury.style.height="100px";
        mercury.style.Display="flex";
        venus.style.Display="none";
        h1.innerHTML="MARS";
        a.innerHTML="EARTH";
        b.innerHTML="MERCURY";
        state=1;
        }
        if(dets.target.id==="venus"){
            earth.style.top="50%";
    earth.style.left="95%";
    earth.style.height="100px";
    mars.style.top="35%";
    mars.style.left="50%";
    mars.style.height="0px";
    venus.style.top="150%";
    venus.style.left="50%";
    venus.style.height="180%";
    mercury.style.top="50%";
    mercury.style.left="5%";
    mercury.style.height="100px";
    earth.style.Display="flex";
    mars.style.Display="none";
    h1.innerHTML="VENUS";
    a.innerHTML="MERCURY";
        b.innerHTML="EARTH";

        
    state=3;
        }
        
    }
    if(state===1){
        if(dets.target.id==="mercury"){
            earth.style.top="35%";
    earth.style.left="50%";
    earth.style.height="0px";
    mars.style.top="50%";
    mars.style.left="5%";
    mars.style.height="100px";
    venus.style.top="50%";
    venus.style.left="95%";
    venus.style.height="100px";
    mercury.style.top="150%";
    mercury.style.left="50%";
    mercury.style.height="180%";
    venus.style.Display="flex";
    earth.style.Display="none";
    h1.innerHTML="MERCURY";
    a.innerHTML="MARS";
        b.innerHTML="VENUS";
    state=2;
        }
        if(dets.target.id==="earth"){
            earth.style.top="150%";
    earth.style.left="50%";
    earth.style.height="180%";
    mars.style.top="50%";
    mars.style.left="95%";
    mars.style.height="100px";
    venus.style.top="50%";
    venus.style.left="5%";
    venus.style.height="100px";
    mercury.style.top="35%";
    mercury.style.left="50%";
    mercury.style.height="0px";
    mars.style.Display="flex";
    mercury.style.Display="none";
    a.innerHTML="VENUS";
        b.innerHTML="MARS";
    state=0;
    h1.innerHTML="EARTH";
        }
        
       
    }
    if(state===2){
        if(dets.target.id==="venus"){
            earth.style.top="50%";
    earth.style.left="95%";
    earth.style.height="100px";
    mars.style.top="35%";
    mars.style.left="50%";
    mars.style.height="0px";
    venus.style.top="150%";
    venus.style.left="50%";
    venus.style.height="180%";
    mercury.style.top="50%";
    mercury.style.left="5%";
    mercury.style.height="100px";
    earth.style.Display="flex";
    mars.style.Display="none";
    h1.innerHTML="VENUS";
    a.innerHTML="MERCURY";
        b.innerHTML="EARTH";
    state=3;
        }
        if(dets.target.id==="mars") {
            earth.style.top="50%";
        earth.style.left="5%";
        earth.style.height="100px";
        mars.style.top="150%";
        mars.style.left="50%";
        mars.style.height="180%";
        venus.style.top="35%";
        venus.style.left="50%";
        venus.style.height="0px";
        mercury.style.top="50%";
        mercury.style.left="95%";
        mercury.style.height="100px";
        mercury.style.Display="flex";
        venus.style.Display="none";
        h1.innerHTML="MARS";
        a.innerHTML="EARTH";
        b.innerHTML="MERCURY";
        state=1;
        }
    
            
    }
    if(state===3){
        if(dets.target.id==="earth"){
            earth.style.top="150%";
    earth.style.left="50%";
    earth.style.height="180%";
    mars.style.top="50%";
    mars.style.left="95%";
    mars.style.height="100px";
    venus.style.top="50%";
    venus.style.left="5%";
    venus.style.height="100px";
    mercury.style.top="35%";
    mercury.style.left="50%";
    mercury.style.height="0px";
    mars.style.Display="flex";
    mercury.style.Display="none";
    h1.innerHTML="EARTH";
    a.innerHTML="VENUS";
        b.innerHTML="MARS";
    state=0;
        }
        if(dets.target.id==="mercury"){
            earth.style.top="35%";
    earth.style.left="50%";
    earth.style.height="0px";
    mars.style.top="50%";
    mars.style.left="5%";
    mars.style.height="100px";
    venus.style.top="50%";
    venus.style.left="95%";
    venus.style.height="100px";
    mercury.style.top="150%";
    mercury.style.left="50%";
    mercury.style.height="180%";
    venus.style.Display="flex";
    earth.style.Display="none";
    h1.innerHTML="MERCURY";
    a.innerHTML="MARS";
        b.innerHTML="VENUS";
    state=2;
        }
       
        
    }

    console.log(dets.target)
})

var mh2 = document.querySelector("#main2 #txt h2");
var mh1 = document.querySelector("#main2 #txt h1");
var mp = document.querySelector("#main2 #txt p");
var h3 = document.querySelector("#main1 h3");
var line = document.querySelector("#main2 #txt #line");
var nav = document.querySelector("#main1 #nav")



main1.addEventListener("dblclick",function(dets){

    if(state===0){
        if(dets.target.id==="earth"){
            if(flag===0){
                earth.style.top="450px";
    earth.style.left="76%";
    earth.style.height="500px";
    main1.style.overflow="visible"
    line.style.backgroundColor ="rgb(91, 250, 157)";
    main1.style.height="0";
    mars.style.opacity="0";
    venus.style.opacity="0";
    txt1.style.opacity="0";
    txt2.style.opacity="1";
    a.style.opacity="0";
    b.style.opacity="0";
    nav.style.opacity="0";

    flag=1;
    mh2.innerHTML = "THE BLUE PLANET";
mh1.innerHTML = "EARTH";
mp.innerHTML = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands.";
            }
            else{
                earth.style.top="150%";
                earth.style.left="50%";
                earth.style.height="180%";
                main1.style.height="100vh";
                mars.style.opacity="1";
    venus.style.opacity="1";
    txt1.style.opacity="1";
    txt2.style.opacity="0";
    a.style.opacity="1";
    b.style.opacity="1";
    nav.style.opacity="1";
    
                flag=0;
            }
        }
    }


     else if(state===1 )
     {
        if(dets.target.id==="mars"){
            if(flag===0){
                mars.style.top="450px";
    mars.style.left="76%";
    mars.style.height="500px";
    main1.style.overflow="visible"
    main1.style.height="0";
    earth.style.opacity="0";
    mercury.style.opacity="0";
    txt1.style.opacity="0";
    txt2.style.opacity="1";
    a.style.opacity="0";
    b.style.opacity="0";
    nav.style.opacity="0";
    line.style.backgroundColor ="rgb(214, 28, 28)";
    flag=1;
    mh2.innerHTML = "THE RED PLANET";
mh1.innerHTML = "MARS";
mp.innerHTML = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet. The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance, that is distinctive among the astronomical bodies visible to the naked eye.";
            }
            else{
                mars.style.top="150%";
                mars.style.left="50%";
                mars.style.height="180%";
                main1.style.height="100vh";
                 earth.style.opacity="1";
                 txt1.style.opacity="1";
                 txt2.style.opacity="0";
                 a.style.opacity="1";
                 b.style.opacity="1";
    mercury.style.opacity="1";
    nav.style.opacity="1";
                flag=0;
            }
        }
}
    
       else if(state===2){
    
    if(dets.target.id==="mercury"){
        if(flag===0){
            mercury.style.top="450px";
    mercury.style.left="76%";
    mercury.style.height="500px";
    main1.style.overflow="visible"
    main1.style.height="0";
     mars.style.opacity="0";
    venus.style.opacity="0";
    txt1.style.opacity="0";
    txt2.style.opacity="1";
    a.style.opacity="0";
    b.style.opacity="0";
    nav.style.opacity="0";
    line.style.backgroundColor ="rgb(170, 168, 165)";
    flag=1;
    mh2.innerHTML = "THE ROCKY PLANET";
mh1.innerHTML = "MERCURY";
mp.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°.";
        }
        else{
            mercury.style.top="150%";
            mercury.style.left="50%";
            mercury.style.height="180%";
            main1.style.height="100vh";
            mars.style.opacity="1";
    venus.style.opacity="1";
    txt1.style.opacity="1";
    txt2.style.opacity="0";
    a.style.opacity="1";
    b.style.opacity="1";
    nav.style.opacity="1";
            flag=0;
        }
    }
}
    
    else {
    
    if(dets.target.id==="venus"){
        if(flag===0){
            venus.style.top="450px";
    venus.style.left="76%";
    venus.style.height="500px";
    main1.style.overflow="visible"
    main1.style.height="0";
    earth.style.opacity="0";
    mercury.style.opacity="0";
    txt1.style.opacity="0";
    txt2.style.opacity="1";
    a.style.opacity="0";
    b.style.opacity="0";
    nav.style.opacity="0";
    line.style.backgroundColor ="rgb(207, 96, 5)";
    flag=1;
    mh2.innerHTML = "THE HOTTEST PLANET";
mh1.innerHTML = "VENUS";
mp.innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. Venus orbits the Sun every 224.7 Earth days.";
        }
        else{
            venus.style.top="150%";
            venus.style.left="50%";
            venus.style.height="180%";
            main1.style.height="100vh";
            earth.style.opacity="1";
    mercury.style.opacity="1";
    txt1.style.opacity="1";
    txt2.style.opacity="0";
    a.style.opacity="1";
    b.style.opacity="1";
    nav.style.opacity="1";
            flag=0;
        }
    }
}
    
})




