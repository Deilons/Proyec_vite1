// Import our custom CSS
import "../scss/styles.scss";


import * as echarts from 'echarts';

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { coders } from "../../public/data/database.js";

import { deleteCoder, getTableForEach } from "./operations.js";

import { create } from "./operations.js";

import { alerSmallSuccess } from "./alerts";

const table = document.querySelector("table");

const tbody = document.querySelector("tbody");

const form = document.querySelector("form");

const name = document.getElementById("name");

const lastName = document.getElementById("last-name");

const email = document.getElementById("email");

let idToUpdate

getTableForEach(coders,tbody);

form.addEventListener("submit", function (event) {
    create(name,lastName,email,coders);

     if (idToUpdate === undefined) {
        create(name,lastName,email)
        alerSmallSuccess("saved")
     } else {
        for(const coder of coders){
            if(coder.id == idToUpdate){
                coder.name = name.value;
                coder.lastName = lastName.value;
                coder.email = email.value;
            }
        }
         alerSmallSuccess("update")
         idToUpdate = undefined
     }

    alerSmallSuccess("Coder saved successfully");
    form.reset();
    getTableForEach(coders,tbody);

    event.preventDefault();
}); 

table.addEventListener("click", function (event){
    if(event.target.classList.contains("btn-danger")){
        const idToDelete = event.target.getAttribute("data-id");

        deleteCoder(coders,idToDelete);

        alerSmallSuccess("Coder deleted")
        getTableForEach(coders,tbody);

        if(event.target.classList.contains("btn-danger")){
            const idToUpdate = event.target.getAttribute("data-id");
            const coder = coders.find(coder => coder.id == idToUpdate);

            name.value = coder.name;
            lastName.value = coder.lastName;
            email.value = coder.email;
            
        }
    }
})