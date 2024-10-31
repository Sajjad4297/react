import { Canvas } from './Canvas'
import { useState } from 'react';

export default function InputBox({ isEyeClosed,setIsEyeClosed,register, errors, type, name, id, value,eyeOpen,eyeClose, forInput, src, isCaptcha, rightCode, setRightCode }) {
    var [changed, setChanged] = useState(false);
    function changeCode() {
        if (isCaptcha) {
            setChanged(!changed);
        }
    }
    function whichError() {
        var errorMessage;
        switch (name) {
            case "userName":errorMessage = errors.userName?.message

                break;
            case "password":errorMessage = errors.password?.message

                break;
            case "code":   errorMessage = errors.code?.message

                break;


        }
        return errorMessage
    }
    return (
        <div className="input-box">
            <input {...register(name)} className='input' type={type} name={name} autoComplete="off" id={id} />
            <label htmlFor={forInput}> {value} </label>
            <label htmlFor={forInput} className="input-error" >{whichError()}</label>
            <label htmlFor={forInput}><img className={!isCaptcha ? "icon" : "refresh"} src={src} onClick={changeCode} />
                {isCaptcha && <Canvas changed={changed} setChanged={setChanged} rightCode={rightCode} setRightCode={setRightCode} />}
                {eyeOpen && <img className='eye' src={isEyeClosed ? eyeClose : eyeOpen} onClick={() => setIsEyeClosed(!isEyeClosed)} />}
            </label>

        </div>
    )
}
