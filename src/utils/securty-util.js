
// import crypto from 'crypto';
// const crypto = require('crypto');
import CryptoJS  from 'crypto-js';
const uuidv4 = ()  => {
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  };
  
const timestamp = () => { 
    var today = new Date(); 
    today.setHours(today.getHours() + 9); 
    return today.toISOString().replace('T', ' ').substring(0, 19); 
}


export const sign = (timestamp, reqKey, apiKey) =>{
    let oriSingData = reqKey+timestamp;
    console.log(CryptoJS);
    return CryptoJS.HmacSHA1(oriSingData, apiKey).toString(CryptoJS.enc.Base64);
    //.update(oriSingData).digest('base64');
};

export const getSign = (apiKey) =>{
    let reqReq = uuidv4();
    let tm = timestamp();
    return {reqReq:reqReq 
    , time:tm 
    , sign:sign(tm,reqReq,apiKey)};
};

