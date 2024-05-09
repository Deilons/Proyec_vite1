// Import our custom CSS
import "../scss/styles.scss";


import * as echarts from 'echarts';

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { coders } from "../../public/data/database.js";

import { getTableForEach } from "./operations.js";

import { create } from "./operations.js";

import { alerSmallSuccess } from "./alerts";

const tbody = document.querySelector("tbody");

const form = document.querySelector("form");

const name = document.getElementById("name");

const lastName = document.getElementById("last-name");

const email = document.getElementById("email");

form.addEventListener("submit", function (event) {
    create(name,lastName,email,coders);

    alerSmallSuccess("Coder saved successfully");
    form.reset();
    getTableForEach(coders,tbody);

    event.preventDefault();
});



getTableForEach(coders,tbody);

