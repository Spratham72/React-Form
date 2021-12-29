import { useRef, useState } from "react"
import {Table}from './table';
export const Form=()=>{
   
    const ref=useRef(null);
    const [formInput, formState]=useState({
        "Name":"",
        "Age":"",
        "Address":"",
        "department":"",
        "salary":"",
        "married":false,
        "unmarried":false,
        "photo":""
    });
    const [tcpmponent, tstate]=useState(false);
    
const submit=   (e)=>{
 e.preventDefault();
 tstate(true);


 
 try {
     let response=fetch('http://localhost:1234/api/users',{
         method:'POST',
         body:JSON.stringify(formInput),
         headers:{
             "Content-Type":"application/json"
         }
     });
     
     
     
 } catch (error) {
     console.log(error)
 }
 //console.log(formInput)

}

const change=(e)=>{
    
    if(e.target.id==="photo"){
        const files=ref.current.files;
        const img=new FileReader();
        img.readAsDataURL(files[0]);
        img.onload=(e)=>{
            formState({
                ...formInput,
                "photo":e.target.result
                
            })
        }
        
    }
    else{
        formState({
            ...formInput,
            [e.target.id]:e.target.value,
        })
    }

}

   


 
    return <div>
        { tcpmponent ?
           <Table data={formInput} /> :
           ( <form id="form" onSubmit={submit}>
           <label htmlFor="Name">Name: </label>
           <br></br>
           <input type="text" placeholder="Name" id="Name" onChange={change} value={formInput.Name} /> <br></br>
           <label htmlFor="Age">Age: </label>
           <br></br>
           <input type="text" placeholder="Age" id="Age" onChange={change} value={formInput.Age}/><br></br>
           <label htmlFor="Address">Address: </label>
           <br></br>
           <input type="text" placeholder="Address" id="Address" onChange={change} value={formInput.Address}/><br></br>
           <label htmlFor="department">Department </label>
           <br></br>
           <select name="department" id="department" onChange={change} value={formInput.department}>
               <option value="finance">Finance</option>
               <option value="clearical">Clearical</option>
               <option value="IT">IT</option>
               <option value="hr">HR</option>
           </select><br/>
           <label htmlFor="salary">Salary: </label><br/>
           <input type="text" placeholder="Salary" id="salary" onChange={change} value={formInput.salary}/> <br/>
           <label>Marital status: </label>
           <label htmlFor="married">Married</label>
           <input type="checkbox" name="married" id="married"  onChange={change} checked={formInput.married}/>
           <label htmlFor="unmarried">Un-Married</label>
           <input type="checkbox" name="unmarried" id="unmarried"  onChange={change} checked={formInput.unmarried}/><br/>
           <label htmlFor="photo">Profile Photo:</label>
           <input ref={ref} type="file" name="photo" id="photo" onChange={change}     /><br />
           <input type="submit"/>
       </form>
           )
        }
       
        </div>
    
}
