// logger middleware

export default function(req,res,next){
    if (req && res && next) {
        const time = new Date(Date.now()).toString();
        console.log(`${req?.method || ""} ${req?.path || ""} - ${time}`);
        next();
    }
}
