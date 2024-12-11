import React from 'react'

const Alert = (props) => {
    // console.log(props.toogleMode.type);
    
    return (
        <div>
           {  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{`${props.alert.type}`}:</strong> {`${props.alert.message}`}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}

export default Alert
