import IconGrid from "../components/icon_grid";
import Test from "../components/test";
import ReactDOM from 'react-dom';
import React, { useState } from 'react'
import { CONTACT_FORM_ENDPOINT } from "../config";

async function postContactForm(data) {
    const response = await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return response;
  }


export default function Onboarding() {

    const [formData, setFormData] = useState({});
    const [formResponseStatus, setFormResponseStatus] = useState();


    async function handleSubmit(event) {
        event.preventDefault();
       

        const formCollection =  Array.from(event.target.elements)
         console.log(formCollection)
       
        formCollection.map(element => {

        if (event.target.id === "form-name") {
                const name = event.target.value;
                setFormData(Object.assign(formData, { name }))
                }

        // if (event.target.id === "icons") {
        //   console.log("entred fields")
        //   const fields = event.target.value;
        //   setFormData(Object.assign(formData, { fields }))
        //   }

        })
       
        

        const response = await postContactForm(formData);
        setFormResponseStatus(response.status);
      }

    return (
        <div>
          
          <form onSubmit={handleSubmit}>
              <input id="form-name" placeholder="Your name" value={formData.name}  />
              <div id = "icons" >
                 <IconGrid />
              </div>
             

              <button type="submit">Submit</button> 
            </form> 
            

        </div>
        
        
    )

   
  }