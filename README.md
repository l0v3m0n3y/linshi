# linshi
JavaScript library for linshi-email.com/
# main
```js
async function main(){
    const {linshi} = require('./linshi');
    const mailbox= new linshi();
    let req=await mailbox.check_email("email")
    console.log(req)
}
main()
```
