import React from "react";
class UserClass extends React.Component{
    constructor (props){
        super(props);
        this.state ={
            userInfo:{
                name:"dummy",
                location:"dummy"
            }
        };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Amandeepkaur1414");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {name,location,avatar_url} =this.state.userInfo;
        return(
            <div className ="user-container">
              <img src ={avatar_url}/>
           <div>{name}</div>
           <div>{location}</div>
        </div>
        )
    }
}
export default UserClass;