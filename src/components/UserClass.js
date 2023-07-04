import React from "react";
import {BsGithub ,BsGoogle,BsLinkedin} from  "react-icons/bs";
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
            <div className ="p-12 m-12 flex flex-wrap">
              <img  className="rounded-full w-[200px] h-[200px] mt-10"  src ={avatar_url}/>
              <div  className =" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 m-12 w-[500px] pl-2 pr-2 p-2">
                    <div className="text-gray-700 font-medium text-lg">Hi, I'm <span className="text-blue-700 font-bold text-2xl">{name}</span></div>
                    <div className="text-gray-700 font-medium text-lg">a Frontend Developer from {location}.</div>
                    <div className="text-gray-700 font-normal text-m"> Learing react and leveling up my Web Development Skills. Passionate React Developer Seeking Exciting Opportunities to Transform User Experiences. </div>
                   
                    <div className="mt-4">Find me on</div>
                    <div className="flex flex-wrap text-gray-700 font-extrabold">
                   
                        <div className="m-2" > <a target ="blank"  href="https://github.com/Amandeepkaur1414"> <BsGithub /></a></div>
                        <div  className="m-2"><a target ="blank" href="mailto:amandeep.kaur1414@gmail.com"  ><BsGoogle /></a></div>
                        <div  className="m-2">  <a target ="blank"  href="https://www.linkedin.com/in/amandeep-kaur-093a74b8/" ><BsLinkedin /></a></div>
                    </div>
              </div>
           
        </div>
        )
    }
}
export default UserClass;