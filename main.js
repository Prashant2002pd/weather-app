


document.querySelector("#btn").onclick=()=>{
    let city=document.querySelector("#input").value;
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6f5e9e3cad52eb38d20c3db30728e19b`;
    
    async function chackweather(){
        const response = await fetch(URL);
        if(response.status==404 || city==""){
            document.querySelector("#error").style.display="block"
            document.querySelector("#weather").style.display="none"

        }else{
            const data=await response.json();
            let weatherimg=document.querySelector("#weather-img");
            
    
            document.querySelector("#city").innerHTML=data.name;
            document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
            document.querySelector("#wind").innerHTML=data.wind.speed + "km/h";
    
            if(data.weather[0].main=="Clouds"){
                weatherimg.src="images/clouds.png";
            }else if(data.weather[0].main=="Clear"){
                weatherimg.src="images/clear.png";
            }else if(data.weather[0].main=="Rain"){
                weatherimg.src="images/rain.png";
            }else if(data.weather[0].main=="Drizzle"){
                weatherimg.src="images/drizzle.png";
            }else if(data.weather[0].main=="Mist"){
                weatherimg.src="images/mist.png";
            }else if(data.weather[0].main=="Snow"){
                weatherimg.src="images/snows.png";
            }else if(data.weather[0].main=="Smoke"){
                weatherimg.src="images/smoke.png";
            }
            document.querySelector("#error").style.display="none"
            document.querySelector("#weather").style.display="block";
        }
       
       
    }
    chackweather();


    
}
