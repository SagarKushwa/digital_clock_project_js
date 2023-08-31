function clock()
{
    let date = new Date();
    let hours= date.getHours();
    let minutes = date.getMinutes();
    let seconds= date.getSeconds();

if(hours>12)
{
    hours = hours-12;
}

let hrs = document.getElementById("hrs");
hrs.innerHTML = hours;
let mins = document.getElementById("mins");
mins.innerHTML = minutes;
let secs = document.getElementById("secs");
secs.innerHTML = seconds;
}

setInterval(()=>
    {
        clock()
    }, 1000)


let date = new Date();
let hours = date.getHours();

if(hours>=12)
{
    let ampm = document.getElementById('ampm');
    ampm.innerText = "PM";
}
else if(hours<12)
{
    let ampm = document.getElementById('ampm');
    ampm.innerText = "AM";
}

let greetings = document.getElementById('greetings');
if(hours>=12 && hours<=16)
{
    greetings.innerHTML = "GOOD AFTERNOON!!"
}
if (hours>=16 && hours<20)
{
    greetings.innerHTML = "GOOD EVENING!!"
}
if (hours>=20 && hours<24)
{
    greetings.innerHTML = "GOOD NIGHT!!"
}

button.addEventListener("click", function(){
    let date = new Date();
    let hours = date.getHours();

    let wakeup = document.getElementById('wakeuptime');
    let lunch = document.getElementById('lunch');
    let nap = document.getElementById('naptime');
    let night = document.getElementById('nighttime');
    if(parseInt(wakeup.value)===hours)
    {
        document.getElementById('setthetime').innerHTML = "GRAB SOME HEALTHY BREAKFAST!!"
        document.getElementById('image').src = "./img.png"
    }
    else if(parseInt(lunch.value)===hours)
    {
        document.getElementById('setthetime').innerHTML = "LET'S HAVE SOME LUNCH!!"
        document.getElementById('image').src = "./lunch-img1.png"
    }
    else if(parseInt(nap.value)===hours)
    {
        document.getElementById('setthetime').innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById('image').src = "./good-evening2.png"
    }
    else if(parseInt(night.value)===hours)
    {
        document.getElementById('setthetime').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP!!"
        document.getElementById('image').src = "./sleep-img1.png"
    }

    let timing = document.getElementsByClassName('timinga')
    timing[0].innerText = wakeup.options[wakeup.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;


})


var btn = document.querySelector(".button");

btn.addEventListener("mouseover", function() {
  this.textContent = "Party Time";})
  btn.addEventListener("mouseout", function() {
    this.textContent = "Set Alarm";})