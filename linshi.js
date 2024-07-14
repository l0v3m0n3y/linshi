const crypto = require('node:crypto');
class linshi{
    constructor(){
        this.api = "https://www.linshi-email.com/api/v1"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async check_email(email){
        let req=await fetch(`${this.api}/refreshmessage/${crypto.randomBytes(20)}/${email}?t=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {linshi};