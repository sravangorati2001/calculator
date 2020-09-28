//import { ReactComponent } from '*.svg';
import React from 'react';
import Output from './Output';
import Keypad from './keypad';
import './App.css'
class App extends React.Component{
     constructor(){
         super();
         this.state={result : ""}
         this.buttonPressed=this.buttonPressed.bind(this);
     }
    buttonPressed = (buttonName)=>{
        if(buttonName=== "=")
        this.calculate();
        else if(buttonName==='C'){
            this.clear();
        }
        else if(buttonName==='CE'){
           this.backspace();
        }
        else{
            this.setState({
                result:this.state.result+buttonName
            })
        }
    };
    backspace= ()=>{this.setState({result: this.state.result.slice(0,-1)})}
    clear= ()=>{
        this.setState({result:""});
    }
    calculate= ()=>{
        try{
        this.setState({ result : (eval(this.state.result) || " ") + " " });
        }
        catch(e){
            this.setState({ result : "ERROR" });
        }
    }
    render(){
        return(
            <div className="App">
            <div className="calculator">
                <p className="head">Calculator</p>
        <Output result={this.state.result} />
            <Keypad buttonPressed={this.buttonPressed} />
            </div>
            </div>
        )
    }
}

export default App;