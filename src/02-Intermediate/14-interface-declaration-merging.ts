// Interface Merging
interface Request {
    body:any
}

interface Request {
    json: any
}

function getData(req:Request){
    req.body;
    req.json;
}