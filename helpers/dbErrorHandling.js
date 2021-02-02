"use strict"

/*
Get Unique error fields


*/

const uniqueMessage = error =>{
    let output;
    try{
        letfieldName = error.message.split(".$")[1]
        field = field.split("dub key")[0]
        field = field.substring(0, field.lastIndexof("_"))
        req.flash("errors",[{
            message: "an account with this" + field + "already exists"
        }])
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + "already exists"

    }
    catch(err){
output = "already exists"
    }
    return output
}

/*
Get error message from error object
*/
exports.errorHandler = error => {
    let message =""
    if(error.code){
        switch(error.code){
      case 11000:
      case 110001:
          message = uniqueMessage(error)
          break;

          default:
              message="Something went wrong"

    }
}
else{
    for(let errorName in error.errors){
        if(error.errors[errorName].message){
            message =error.errors[errorName].message
        }
    }
}
}