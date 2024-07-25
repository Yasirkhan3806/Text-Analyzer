import React from'react';

 function Alert(props){
    return(
    
             props.modeText &&    <div className={`alert alert-${props.modeText.type} alert-dismissible fade show`} role="alert" style={{color:"black",}}>

{(props.modeText.type).charAt(0).toUpperCase() + (props.modeText.type).slice(1).toLowerCase()} : <strong>{props.modeText.message}</strong>
 
</div>


        
    )
}
export default Alert;
