const starCont=document.querySelector(".quoteSection")
const starCont2=document.querySelector(".starHolder")
const totalStar= window.innerWidth/10;
for(let i=0; i<totalStar; i++){
    let animationdelay=Math.random() *6
    let size=Math.random() *2.5+1
    let speed= Math.random() * 8 + 5
    let posTop= Math.random() * 100
    let posLeft=Math.random() * 100
    let randNum=Math.random() *5
    let borderStar= Math.random() *5
    let randStar= Math.random() *5
    
    let bdStarRD=100
    if ( borderStar<.8){
        bdStarRD=20
    }
    else if(borderStar<1.7){
        bdStarRD=70
    }
    else if(randNum<2.5){
        bdStarRD=0
    }

    let color="white"
    if( randNum<1.2){
        color="#fef399"
    }
    else if(randNum<1.7){
        color="purple"
    }
    else if(randNum<2.5){
        color="#4444dd"
    }
   

    let star=`<span class="star"
    style="animation: twinkle ${speed}s ${animationdelay}s infinite linear; width:${size}px; height:${size}px; top:${posTop}%;left:${posLeft}%; background-color:${color}; border-radius:${bdStarRD}%;box-shadow:${color} 0px 0px 20px 1px;"
    ></span>`

    if(randStar<1.2){
        star=`<span class="star"
    style="animation: twinkle ${speed}s ${animationdelay}s infinite linear; top:${posTop}%;left:${posLeft}%;color:${color}; border-radius:${bdStarRD}%;font-size:${size *3.5}px;"
    >✦</span>`
    }
    else if(randStar<3){
        star=`<span class="star"
    style="animation: twinkle ${speed}s ${animationdelay}s infinite linear; width:${size}px; height:${size}px; top:${posTop}%;left:${posLeft}%; color:${color}; border-radius:${bdStarRD}%;box-shadow:rgb(255, 255, 255) 0px 0px 20px 1px; display:flex; justify-content:center; align-items:center;">▴</span>`
    }


    if(starCont) {
        starCont.innerHTML = starCont.innerHTML + star
    }
    if(starCont2) {
        starCont2.innerHTML = starCont2.innerHTML + star
    }
}