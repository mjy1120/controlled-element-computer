import React,{Component} from "react";
import List from "./dom/list"
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div><List/></div>
    }
}
export default App;