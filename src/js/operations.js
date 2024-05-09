import { coders } from "../../public/data/database.js";

export function getTableFor() {
    for (let i = 0; i < coders.length; i++) {
        const coder = coders[i];

        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    }
}



export function getTableForIn(coders,tbody) {
    for (const key in coders) {
        const coder = coders[key];
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coders[key].id}</th>
            <td>${coders[key].name}</td>
            <td>${coders[key].lastName}</td>
            <td class="text-lowercase">${coders[key].email}</td>
        </tr>
        `
    }
}

export function getTableForEach(coders,tbody) {

    tbody.innerHTML = "";

    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    });
}

export function getTableForOf(coders,tbody) {
    for (const coder of coders){
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    }
}

export function create(name,lastName,email) {
    const newCoder = {
        id: coders.length + 1, //date.now()
        name: name.value,
        lastName: lastName.value,
        email: email.value
        }
    coders.push(newCoder);
}