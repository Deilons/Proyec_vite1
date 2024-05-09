// Import our custom CSS
import "../scss/styles.scss";


import * as echarts from 'echarts';

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


import Swal from 'sweetalert2'

import { coders } from "../../public/data/database.js";

import { getTableForEach } from "./operations.js";

import { create } from "./operations.js";

const tbody = document.querySelector("tbody");

const form = document.querySelector("form");

const name = document.getElementById("name");

const lastName = document.getElementById("last-name");

const email = document.getElementById("email");

form.addEventListener("submit", function (event) {
    create(name,lastName,email,coders);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Coder saved successfully',
        showConfirmButton: false,
        timer: 1500
    })

    form.reset();
    getTableForEach(coders,tbody);

    event.preventDefault();
});



getTableForEach(coders,tbody);

