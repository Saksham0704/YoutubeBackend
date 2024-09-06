
//api error to give it a specific structure of error

class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        error = [],
        statck = ""
    ){
        super(messsage)
        this.statusCode = statusCode
        this.data = null
        this.message =message
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}