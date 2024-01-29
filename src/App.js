import React, { useState } from "react";
import Form from "./Components/FormComponent";
import User from "./Components/UserComponent";
import ErrorModal from "./Components/ErrorModal";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    age: "",
  });

  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.userName.trim().length === 0 ||
      formData.age.trim().length === 0
    ) {
      setErrorMessage("Please enter a valid name and age (non-empty values)");
      setShowError(true)
      return
    }

    if (+formData.age < 1) {
      setErrorMessage("Please enter a valid age (non-negative values)");
      setShowError(true)
      return
    }
    const userText = `${formData.userName} (${formData.age} years old)`;

    // Aggiungi un nuovo utente alla lista degli utenti
    setUserList((prevData) => [...prevData, userText]);

    // Resetta il form dopo l'invio
    setFormData({
      userName: "",
      age: "",
    });
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function onConfirm(){
    setShowError(false)
  }
  return (
    <div className="flexContainer">
      {showError ? (
        <ErrorModal errorMessage={errorMessage} onConfirm={onConfirm}/>
      ) : (
        <div >
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
          />

          {userList.length > 0 ? (
            <div className="card users">
              <ul>
                {userList.map((item) => (
                  <User user={item} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
