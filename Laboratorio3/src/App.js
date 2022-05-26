import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [listOfInfo, setListOfInfo] = useState([]);

  const addInfo = async() => {
    try{
      console.log("Llego");
      const data = await Axios.post("http://localhost:3000/api/infos", {
        name: name
      }).then((response) => {
        setListOfInfo([
          ...listOfInfo,
          { _id: response.data._id, name: name },
        ]);
      });
      window.location.reload();
    }catch(e){
      console.log(e);
    }
  };

  const updateInfo = (id) => {
    const name = prompt("Enter nuevo nombre: ");

    Axios.put(`http://localhost:3000/api/infos/${id}`, {
      name: name,
    }).then((response) => {
      setListOfInfo([
        ...listOfInfo,
        { _id: response.data._id, name: name },
      ]);
    });
    window.location.reload();
  };

  const deleteInfo = (id) => {
    Axios.delete(`http://localhost:3000/api/infos/${id}`).then(
      () => {
        setListOfInfo(
          listOfInfo.filter((val) => {
            return val._id != id;
          })
        );
      }
    );
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/api/infos")
      .then((response) => {
        setListOfInfo(response.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  return (
    <div className="App">
      <div className="inputs">
        <input type="text" placeholder="Isertar aqui" 
          onChange={(event) => {
              setName(event.target.value);
            }}
        /> 
        <button  onClick={addInfo}>Agregar</button> 
      </div>

      <div className="listOfInfo">
        {listOfInfo.map((val)=>{
          return (
            <div className="infoContainer">
              <div className="info">
                <h3>Name: {val.name}</h3>
              </div>
              <button onClick={()=>{updateInfo(val._id)}}>Modificar</button>
              <button  id="removeBtn" onClick={()=>{deleteInfo(val._id)}}>X</button>
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default App;
