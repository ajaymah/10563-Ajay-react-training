import React from 'react';

const Add =({addtodoItem, handleChange,  ...rest})=>{
    return (
        <div className="formWrapper">
        <div className="form-group">
        <label>add</label>
        <input className="form-control " placeholder="First name" name="fname" value={rest.fname} type="text" onChange={handleChange} />
        </div>
        <div className="form-group">
        <input className="form-control " placeholder="Last name" name="lname" value={rest.lname} type="text" onChange={handleChange} />
        </div>
        <div className="form-group txtCenter">
        <button className="button" onClick = {()=> {addtodoItem()}}> Add </button>
        </div>
        </div>
    )
}

export default Add;