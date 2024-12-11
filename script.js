const hourEl = document.querySelector('.hours');
const minutEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');


const updateClock = () =>{
    const nowDate = new Date();

        // console.log(nowDate);
        const hour = nowDate.getHours();
        const minute = nowDate.getMinutes();
        const seconds = nowDate.getSeconds();
        // console.log(hour , minute , seconds);
        const hourDeg = (hour / 12) * 360;
        hourEl.style.transform = `rotate(${hourDeg}deg)`
        const minDeg = (minute / 60) * 360;
        minutEl.style.transform = `rotate(${minDeg}deg)`
        const secDeg = (seconds / 60) * 360;
        secondEl.style.transform = `rotate(${secDeg}deg)`
   
    
}
setInterval(() => {
    updateClock();
}, 1000);