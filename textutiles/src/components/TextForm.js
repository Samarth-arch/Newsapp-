// import { useState } from "react"
import React, { useState } from 'react'
export default function TextForm(props) {
    const [Text, settext] = useState("enter the text")
    const handleOnChange = (event) => {
        console.log("on change")
        settext(event.target.value)
    }
    const handleOnUpChange = () => {
        console.log("clicked on Uppercase " + Text)
        let newtext = Text.toUpperCase()
        settext(newtext);
    }
    return (
        // css na hone ki vajay se pura page load ho raha hai
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="mybox"></label>
                    <h1>This is a Textarea</h1>
                    <div >
                        <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.Mmode==='dark'? 'grey':'light'}}></textarea>
                    </div>

                    <button className="btn btn primary warming" onClick={handleOnUpChange}>Uppercase</button>
                </div>
            </form>
        </>
    )
}

