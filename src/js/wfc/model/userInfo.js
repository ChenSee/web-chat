/*
{
    "uid": "uiuJuJcc", 
    "name": "13888888888", 
    "displayName": "imndx", 
    "gender": 0, 
    "portrait": "https://avatars.io/gravatar/uiuJuJcc", 
    "mobile": "13888888888", 
    "email": "", 
    "address": "", 
    "company": "", 
    "social": "", 
    "extra": "", 
    "type": -472579968, 
    "updateDt": 1550652404513
}

*/
export default class UserInfo {
    uid = '';
    name = '';
    displayName = '';
    gender = 0;
    protrait = '';
    mobile = '';
    email = '';
    address = '';
    social = '';
    extra = '';
    type = 0; //0 normal; 1 robot; 2 thing;
    updateDt = 1550652404513;

    hello(){
        console.log('userInfo hello', this.uid, this.name);
    }
}