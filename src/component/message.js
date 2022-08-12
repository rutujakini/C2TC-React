import  { Component } from "react";

class message extends Component
{
    constructor()
    {super ()
    this.state={
        message:'HELLO M17 STUDENTS'
    }

}
  Changemessage()
  {
    this.setState({
        message:'YOU ARE PLACED'
    })
}
render()
       { return(
        <div>
            <h1> {this.state.message}</h1>
            <button onClick={()=>this.Changemessage()}>Click me</button>
           </div>
           
        )
    }
}
export default message