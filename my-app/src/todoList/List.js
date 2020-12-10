import React from 'react';

const List =(props)=>{
    return (
        <div className="formWrapper">
         {props.data && props.data.length > 0 ? <h4>LISTS</h4> : ''}
        <ul className="listings">
            {props.data && props.data.length > 0 ? 
            props.data.map((item, i)=>{
                return (
                    <li key={i}>
                    First Name : {item.fname} <br/>
                    Lirst Name :  {item.lname}
                    </li>
                )
            }) : null }
        </ul>
        </div>
    )
}

export default List;