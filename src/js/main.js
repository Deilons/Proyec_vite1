// Import our custom CSS
import "../scss/styles.scss";


import * as echarts from 'echarts';

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


import Swal from 'sweetalert2'


import { coders } from "../../public/data/database.js";

import { getTableForEach } from "./operations.js";

const tbody = document.querySelector("tbody");

const form = document.querySelector("form");

const name = document.getElementById("name");

const lastName = document.getElementById("last-name");

const email = document.getElementById("email");

form.addEventListener("submit", function (event) {
        const newCoder = {
        id: coders.length + 1, //date.now()
        name: name.value,
        lastName: lastName.value,
        email: email.value
        }
    event.preventDefault();
    coders.push(newCoder);
    getTableForEach(coders,tbody);

    form.reset();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Coder saved successfully',
        showConfirmButton: false,
        timer: 1500
    })

})





getTableForEach(coders,tbody);


