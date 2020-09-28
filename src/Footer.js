import React from 'react';

 function Conditional(props){
    return (
         props.isLoading === true ? <h1>isLoading</h1> : <h1>Hello World </h1>
    )
 }

  export default Conditional;