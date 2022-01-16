import React, {useState} from 'react'


export default function TextForm(props) {
    const handleOnChange = (event)=>{
        //console.log('handleOnChange Clicked');
        setText(event.target.value)
    }

    const handleUpClick = ()=>{
        //console.log('handleUpChange Clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case!", "success");
    }

    const handleLoClick = ()=>{
        //console.log('handleUpChange Clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case!", "success");
    }

    const handleClearClick = ()=>{
        //console.log('handleUpChange Clicked'+ text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!", "success");
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.headings}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Text</button>


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
