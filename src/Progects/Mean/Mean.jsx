import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Input from './components/Input'
import Numbers from './components/Numbers'
import Buttons from './components/Buttons'
import Reasult from './components/Result'

function App() {
    var [numbers, setNumbers] = useState([]);
    var [result , setResult] = useState();


    function enterNumber(event) {
        if (event.key == " ") {
            event.preventDefault()
        }
        if (!isNaN(event.key) || event.key == "Enter" || event.key == "Backspace" || event.key == "-") {
            if (event.key == "Enter" && event.target.value != "" && event.target.value != " ") {
                setNumbers([...numbers, {
                    id: uuidv4(),
                    value: event.target.value
                }]);
                event.target.value = ""
            }
        }

        else {
            event.preventDefault()
        }


    }
    function deleteNumber(number) {
        let newNumbers = numbers.filter((numbers) => {

            return numbers.id != number.id



        })
        setNumbers(newNumbers)

    }
    function seeResult1() {
        let sum = 0;
        let i = 0;
        while ( i < numbers.length) {
            sum += parseFloat(numbers[i].value);
            i++;
        }
        isNaN(sum/i) ?  setResult("عددی وارد کنید") : setResult(sum/i)

    }
    function seeResult2() {
        let multi = 1;
        let i = 0;
        while ( i < numbers.length) {
            multi *= parseFloat(numbers[i].value);
            i++;
        }
        isNaN(Math.pow(multi,1/i)) ?  setResult("عددی وارد کنید") : setResult(Math.pow(multi,1/i))


    }
    function seeResult3() {

    }


    return (

        <div className='div-mom'>
            <Input enterNumber={enterNumber} />
            <div className='numbers'>
                {numbers.map((number, index) => <Numbers number={number} key={index} deleteNumber={deleteNumber} />)}
            </div>
            <Buttons seeResult1={seeResult1} seeResult2={seeResult2} seeResult3={seeResult3} />
            <Reasult result1={result} />
        </div>
    )
}

export default App
