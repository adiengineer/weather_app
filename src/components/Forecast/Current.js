import React from 'react';

const current = (props) => {
    return (
        <div> 
            {props.responseObj.cod === 200 ?
                <div> 
                    <p><strong>{props.responseObj.name} </strong></p>
                    <p> Temperature: {Math.round(props.responseObj.main.temp)} degrees </p>
                    <p> {props.responseObj.weather[0].description} </p>
                </div> 
            : null
            }
        </div>
    )
}

export default current;