import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text");
  const [numberOfNouns, setNumberOfNouns] = useState(0);


  const handleLpChange = () => {
    console.log("lowercase was lowered");
    setText(text.toLowerCase());
    props.setalertmsg("Text is changed to lower case","success")
  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
    checkingNouns(event.target.value);
  };

  const handleUpChange = () => {
    console.log("uppercase was uppered");
    setText(text.toUpperCase());
    props.setalertmsg("Text is changed to upper case","success")
  };

  const capitalizeText = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    props.setalertmsg("Text is capitalized","success")
  };

  const checkingNouns = (newText) => {
    let numberOfNouns = 0;
    const storingCharc = newText.split(' ').map(word => word.charAt(0)).join('');
    storingCharc.split('').forEach(element => {
      if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
        numberOfNouns++;
      }
    });
    setNumberOfNouns(numberOfNouns);
  };

  let numberOfWords = text.split(" ");
  numberOfWords = numberOfWords.filter((word) => word!== "");
 

  return (
    <div className="form-container" style={props.mode}>
      <div className="form" width="400px" height="200px">
        <h1>{props.heading}</h1>
        <label htmlFor="textform">
          <textarea
            className="input"
            onChange={handleOnChange}
            placeholder="Type your text"
            rows={8}
            cols={100}
            value={text}
            style={{
              color: props.mode.color === "black" ? "black" : "white",
              background: props.mode.background === "black" ? "black" : "white"
            }}
          ></textarea>
        </label>
        <div className="btn-container">
          <button className="btn btn-primary" onClick={handleLpChange}>
            Convert to lowerCase
          </button>
          <button className="btn btn-secondary" onClick={handleUpChange}>
            Convert to uperCase
          </button>
          <button className="btn btn-success" onClick={capitalizeText}>
            Convert to Capatalize
          </button>
        </div>
        <h2 className="my-3">Text Summary:</h2>
        <p>
          Words {numberOfWords.length} and {text.length} characters
        </p>
        <h3>Time required to read these: </h3>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <p>
          <b>Number OF Nouns = </b>{numberOfNouns}
        </p>
        <h3>Preview: </h3>
        <p>{text}</p>
      </div>
      <div className="btn-container2">
        <button className="btn btn-primary" onClick={props.hDarkMode}>
          {props.btext}
        </button>
      </div>
    </div>
  );
}
