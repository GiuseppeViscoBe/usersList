import React from "react";

function Form({ handleSubmit, handleChange,formData }) {
  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="input">
        <label htmlFor="userName">
          UserName
          <input onChange={handleChange} type="text" name="userName" value={formData.userName}></input>
        </label>
        <br></br>
        <label htmlFor="age">
          Age (Years)
          <input onChange={handleChange} type="number" name="age" value={formData.age}></input>
        </label>

        <button className="button" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default Form;
