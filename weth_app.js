let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate= document.getElementById("climate");
let iconfile;
const input=document.getElementById("input");
const searchButton=document.getElementById("searchbtn");

searchButton.addEventListener('click',(e)=>{

    e.preventDefault();
    getWeather(input.value);
    input.value='';
});

const getWeather = async(city)=> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=110a8a090f5a0cb4cdec3b853ecbb3b6`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        console.log(weatherData);
        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = math.round(feels_like - 273);
        if (id < 300 && id > 200) {
            tempicon.src = "img6.png";
        }
        else if (id < 400 && id > 300) {
            tempicon.src = "img3.png";
        }
        else if (id < 600 && id > 500) {
            tempicon.src = "img5.png";
        }
        else if (id < 800 && id > 600) {
            tempicon.src = "img.4";
        }



    }
    catch (error) {
        alert('city not found');
    }
}


window.addEventListener("load",()=>{

    let long;
    let lati;

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position)=>{

            long=position.coords.longitude;
            lati=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";

    const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=110a8a090f5a0cb4cdec3b853ecbb3b6`
    
        fetch("https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=110a8a090f5a0cb4cdec3b853ecbb3b6").then((response)=>{
        return response.json();

        })
        .then(data =>
            {
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
                if(id<300 && id>200)
                {
                    tempicon.src="img6.png"
                }
                else if(id<400 && id> 300)
                {
                    tempicon.src="img3.png"
                }
                else if(id<600 && id>500)
                {
                    tempicon.src="img5.png"
                }
                else if(id<800 && id>600)
                {
                    tempicon.src="img.4"
                }



                console.log(data);



            })

        }
    
            )}
            
})
