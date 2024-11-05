import React from "react";


export class User extends React.Component{
    constructor(props){
        super(props);

        //now this is a state variable ,
        //In a classbased component . we didnot use hooks we create a state variable like this
        this.state={
            userInfo:{
                name:"dummy",
                location:"dummy",
                avatar_url:"dummy",
            }
        }
    }

    async  componentDidMount(){
        const data = await fetch("https://api.github.com/users/RishabhSharma17");
        const j = await data.json();

        this.setState({
            userInfo:j,
        })
    }

    render(){
        const {name, location, avatar_url}=this.state.userInfo;
        return (
            <div className="user">
                {/* <h2>Count : {this.state.count}</h2> */}
                {/* <h2>Count : {count}</h2>
                <button onClick={()=>{
                        //wrong method
                        //this.state.count++; -> never update state variable directly.

                        //correct method -> this is the method which is given to us by react itself
                        this.setState({count:count+1});
                        
                        
                    }} 
                >Increase Count</button> */}
                {/* <h3>{this.props.name}</h3> */}
                <h3>{name}</h3>
                {/* <h4>{this.props.location}</h4> */}
                <img src={avatar_url} />
            </div>
        );
    };
}