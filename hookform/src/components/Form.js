// import React, {useState} from "react";
    
    
// const Form = (props) => {
    
//     const [firstName, setFirstname] = useState("");
//     const [lastName, setLastname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setconfirmPassword] = useState("");
//     const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
//     // const{inputs, setInputs} = props;
// //     const onChange = (e) =>{
// //         setInputs({
// //             ...inputs,
// //             [e.target.name]: e.target.value
            
// //     });
// // };
// const createUser = (e) => {
//     e.preventDefault();
//     const newUser = { firstName, lastName, email, password, confirmPassword };
//     console.log("Welcome", newUser);
//     setHasBeenSubmitted( false );
// };

// const formMessage = () => {
//     if( hasBeenSubmitted ) {
//     return "Thank you for submitting the form!";
// } else {
//     return "Welcome, please submit the form";
// }
// };

// return (
//     <form onSubmit={ createUser }>
//     {
//         hasBeenSubmitted ? 
//         <h3>Thank you for submitting the form!</h3> :
//         <h3>Welcome, please submit the form.</h3> 
//     }
//         <h3>{ formMessage() }</h3>
//     <div>
//             <label>First Name: </label> 
//             <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
//         </div>
//         <div>
//             <label>Last name: </label> 
//             <input type="text" onChange={ (e) => setLastname(e.target.value) } />
//         </div>
//         <div>
//             <label>Email Address: </label> 
//             <input type="text" onChange={ (e) => setEmail(e.target.value) } />
//         </div>
//         <div>
//             <label>Password: </label>
//             <input type="text" onChange={ (e) => setPassword(e.target.value) } />
//         </div>
//         <div>
//             <label>Confirm Password: </label>
//             <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
//         </div>
//         <input type="submit" value="Create User" />
//     </form>
// );
// };



    // const updateFirstname = (e) => {
    //     setFirstname(e.target.value);
    //     if(e.target.value.length < 2) {
            
    //     }
    // }
    
//     return(
//         <form>
//             <div className="form-group">
//                 <label htmlFor="firstName">First Name: </label> 
//                 <input onChange={ (e) => updateFirstname(e) } type="text" name="firstName"/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="lastName">Last Name: </label> 
//                 <input onChange={onChange} type="text" name="lastName"/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="email">Email Address: </label> 
//                 <input onChange={onChange} type="text" name="email"/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Password: </label>
//                 <input onChange={onChange} type="text" name="password"/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="confirmPassword">Password Confirmation: </label>
//                 <input onChange={onChange} type="text" name="confirmPassword"/>
//             </div>
           
//         </form>
//     );
// };

// export default Form;
    