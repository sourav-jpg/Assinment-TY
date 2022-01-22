import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Todo() {
  const [val, setval] = useState({
    items: "",
  });
  const [display, setdisplay] = useState([]);

  const handleChange = (event) => {
    const valCopy = { ...val };
    valCopy[event.target.name] = event.target.value;

    setval(valCopy);
    console.log(valCopy);
  };
  const addItems = (event) => {
    event.preventDefault();
    const displayCopy = [...display];
    displayCopy.push(val);
    setdisplay(displayCopy);
    console.log(displayCopy);
  }



  // const deleteItems=(index)=>{
  //   const valsCopy=[...val]
  //   const filteredVal = valsCopy.filter((i)=>{
  //     return i!==index
  //   })
  //   setval(filteredVal)
    
  // }
  const deleteTodo = (index)=>{
    const todoCopy = [...display]
    const filteredTodos = todoCopy.filter((value,i)=>{
        return i!== index
    })
    setdisplay(filteredTodos)
}




  return (
    <>
      <div className="form-group text-light">
        <br />
        <br />

        <h1 className="text-danger" style={{ textAlign: "center" }}>
          Todo App
        </h1>
        <br />
        <input
          name="items"
          className="form-control "
          style={{ width: "200px", marginLeft: "670px" }}
          placeholder="Add Items"
          onChange={handleChange}
          value={val.items}
        ></input>
        <br />
        <button
          className="btn btn-success"

          style={{ color: "white", marginLeft: "745px"}}
          onClick={addItems}
        >
          Add
        </button>
       

        <br />
        <br />
        <br />
      </div>
      <h3 align='center' style={{marginTop:'-20px'}}>TODO LIST</h3><br/><br/>
       
        

      {display.map((value, index) => {
        return (
          <table >
          <tr>
          <td >
          
          <p  
          className="text-success"
          style={{
            marginLeft: "670px",
            font: "message-box",
            fontWeight: "bold",
            border:"1px solid black",
            marginTop:"-18px",
            padding:"10px "

            
          }}
          key={index}
          >
          {value.items}{" "}
          <button
          className="btn btn-danger m-1 "
         
          onClick={()=>{deleteTodo(index)}}
          >
          Delete
          </button>
          
          </p>
          </td>
          </tr>
          </table>
        );
      })}
    </>
  );
}

export default Todo;
