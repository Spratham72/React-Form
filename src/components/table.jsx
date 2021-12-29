import { useState } from "react";

export const Table=({data})=>{

     return <>
    <h2>REVIEW YOUR DETAILS</h2>
    <table>
<thead>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Address</th>
    <th>Department </th>
    <th>Salary</th>
    <th>Marital Status</th>
    <th>Profile Photo</th>
    </tr>
</thead>
    <tbody>
    <tr><td>{data.Name}</td>
        <td>{data.Age}</td>
        <td>{data.Address}</td>
        <td>{data.department}</td>
        <td>{data.salary}</td> 
        <td>{data.married?'Married':'Unmarried' }</td>
        <td><img id="preview" src={data.photo} alt="" srcset="" /></td>
        </tr>

    </tbody>
</table>
    </>
        
    
}

// var Show=async()=>{
   
// console.log(data)
//     console.log(data)
//     data.map(Element=>{
//         
//     })
// }