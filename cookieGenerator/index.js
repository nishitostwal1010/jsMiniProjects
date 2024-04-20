//Format of cookie - 
//document.cookie = `firstName=Nishit; expires=Mon, 1 April 2030; path=/`

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");
const clearCookies = document.querySelector("#clearCookies");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

clearCookies.addEventListener("click", () => {
    deleteCookie("firstName");
    deleteCookie("lastName");
});

function setCookie(name, value, daysToLive){ 
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString(); //date.toUTCString() is used to convert time in seconds to days
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){ //Passing null to value and expiry to delete cookie
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie); //Convert the encoded cookie and decode it to get orignal value
    const cArray = cDecoded.split("; "); //Split the cookie after every key-value pair
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1); //Get the value of key by taking substring from index name.length+1
        }
    })
    return result; //Return the value of the key
}

