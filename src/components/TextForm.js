import React, {useState} from 'react'


export default function TextForm(props) {


    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('primary','Text Converted to uppercase!');
    }
    

    const handleDownClick = () =>{

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success','Text Converted to lowercase!');
    }


    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert('warning','Text Cleared!');
    }

    
    const handleCopyText = () =>{
    const textarea = document.getElementById('myTextarea');
     navigator.clipboard.writeText(textarea.value)
    .then(() => {
      console.log('Text copied to clipboard!');
      props.showAlert('danger','Text copied to clipboard!');
    })
    .catch(err => {
      console.log('Failed to copy text: ' + err);
    });
    }


    const handleRemoveExtraSpaces = () => {
      let newText = text.split(/\s+/).join(' ').trim();
      setText(newText);
      props.showAlert('success','Extra Spaces Removed!');
   };

    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }


    const [text , setText] = useState('')
    return (
        <>
        <div>
            <h1 style={{color:props.mode==='dark'?'white':'black '}}>{props.heading}</h1>
            <div className='mb-3'>         
                <textarea className='form-control' id='myTextarea' value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black '}} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' id='uppercaseBtn' onClick={handleUpClick}>Text Uppercase</button>
            <button className='btn btn-primary mx-2' id='lowercaseBtn' onClick={handleDownClick}>Text lowercase</button>
            <button className='btn btn-primary mx-2' id='clearBtn' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' id='copyBtn' onClick={handleCopyText}>Copy Text</button>
             <button className='btn btn-primary mx-2' id='copyBtn' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3'>
            <h2 style={{color:props.mode==='dark'?'white':'black '}}>Your text summary</h2>
            <p style={{color:props.mode==='dark'?'white':'black '}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p style={{color:props.mode==='dark'?'white':'black '}}>{0.008 * text.split(" ").length} Minutes read </p>
        </div>
        </>
    );
}
