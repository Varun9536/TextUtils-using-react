import React from 'react'
import { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("")


    // change karne par new +purana text dono rahe, lilkne ke liye kara hai
    const handleOnChange = (event) => {
        setText(event.target.value)



    }
    // copy text
    const handleCopyText = () => {


        navigator.clipboard.writeText(text)
        props.showalert("copied to clipboard ", "success")



    };

    //remove extra space
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert("removed extra spaces ", "success")
    }

    // change to upper lettrer

    const changeToUppercase = () => {
        let utext = text.toUpperCase()
        setText(utext)
        props.showalert("converted to upper letter ", "success")
    }
    // change to lower case
    const changeToLowercase = () => {
        let ltext = text.toLowerCase()
        setText(ltext)
        props.showalert(" convertred to lower case ", "success")

    }
    // clear text
    const clearText = () => {
        let cleararea = ""
        setText(cleararea)
        props.showalert(" text cleared ", "success")
    }



    return (
        <>
            <div className='container'>
                <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h2>
                <div className="mb-3 ">
                    <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-1" onClick={changeToUppercase}> convert to upper case </button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={changeToLowercase} > convert to lower case</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={clearText}>  clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText} > Copy</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={removeExtraSpace}>remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div ><h3>Your text summary </h3></div>
                <div> No  of characters  in paragraph are = {text.length} and no of words are = {(text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)}
                </div>
                <div> Average time need to read the text = {0.008 * ((text.split(" ").filter((element) => { return element.length !== 0 }).length))} minutes</div>
                <h3 className='my-3'> Preview</h3>
                <div>{text.length === 0 ? "Enter your text to Preview here" : text}</div>
            </div>
        </>
    )
}
