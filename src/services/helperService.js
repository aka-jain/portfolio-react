import axios from 'axios';
// import env from '../services/envConstants';
import storage from './storageService';
// import api from './apiConstants';

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const stringToTemplate = (endpoint, params) => {
  var key = Object.keys(params)[0];
  var value = params[key];
  let convertString = function(literal, params) {
    return new Function(params, "return `" + literal + "`;");
  };

  let template = convertString(endpoint, key);

  let url = template(value);
  return url;
}

// For API requests
// export const sendRequest = (parameters) => {
//   let url = parameters.url,
//     method = parameters.method,
//     token = parameters.token,
//     server = parameters.server,
//     ajax = parameters.ajax,
//     data, header;

//   // Check for ajax flag
//   const getAjax = (url) => {
//     if (ajax) {
//       return `${url}?ajax=${ajax}`;

//     }
//     return false;
//   }

//   if (parameters.data) {
//     data = parameters.data;
//   }

//   if (server === 'csProd') {
//     url = env.csProd + url;

//   } else if (server === 'd1Dev') {
//     url = env.d1Dev + url;
//   }else if (server === 'search') {
//     url = env.search + url;
//   }
//   else if (server === 'localhost') {
//     url = env.localhost + url;
//   }
//   else if (server === 'api_express'){
//     url = env.api_express + url;
//   }
//    else {
//     url = env.testDev + url;
//   }

//   // Return updated URL
//   if (getAjax(url)) {
//     url = getAjax(url);
//   }

//   if(parameters.token) {
//     url = url + `?auth_token=${parameters.token}`;
//   }

//   // language support
//   if (process.env.EXPRESS){
//     var language = window.language || 'en';
//   }else{
//     var language = storage.getCookieItem("language") || 'en';
//   }
//   // const language = storage.getCookieItem('language') || 'en';
//   if(language === "hi") {
//     if(url.indexOf("?") === -1) {
//       url += "?"; 
//     }
//     url += "&locale=hi";
//   }

//   if(parameters.type) {
//     header = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Accept": "application/json"
//       }
//     };
//   } else {
//     header = {
//       headers: {
//         "Accept": "application/json"
//       }
//     };
//   }

//   if (method === 'get') {
//     return axios.get(url, header);
//   } else if (method === 'post') {
//     return axios.post(url, data, header);
//   } else if (method === 'delete'){
//     return axios.delete(url, header);
//   } else if (method === 'put') {
//     return axios.put(url, data, header);
//   }
// }

// Service to redirect page
export const redirectToPage = () => {
  let nextPath = storage.getCookieItem('redirectPath')
  if (!nextPath) {
    window.location.href = '/';
  } else {
    window.location.href = nextPath;
  }

}

export const isPresent = (variable) => {
  if (variable && variable != "")
    return true;
  else
    return false;
}

// required params is an object which tells what params are required and of what type,  for example: requiredParams = {"spCookie": "Array", token: "String" }
// passed params is the object that was passes, example: passedParams = {spCookie: ["adsagadsgadg"], token: "sdahasdkg hdskg"}
// So if the passed params don't contain any key or if the type of value passed is different from what is required, function will return false
// If all params are present and are of correct type, function will return true
export const checkIfRequiredParamsPresent = (requiredParams = {}, passedParams = {}) => {
  for ( var key in requiredParams){
    if ( !(key in passedParams)){
      return false;
    }
    else{
      if (passedParams[key].constructor.name != requiredParams[key]){
        return false;
      }
    }
  }
  return true;
}


export const getMonthName = (month) => {
  let monthNames = ["Jan", "Feb", "Mar", 
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
    "Oct", "Nov", "Dec"];

  return monthNames[month];
}

export const fadeOut = function(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

export const fadeIn = function(element) {
    var op = 0; 
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;

        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

// function to get query param from url
// just pass param value to check it's availability
export const getParameterByName = (name, url = null) => {
    if (!url) url = window.location.search;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Calculate age of the user to send to CleverTap
// Code borrowed from: http://jsfiddle.net/codeandcloud/n33RJ/
export const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}