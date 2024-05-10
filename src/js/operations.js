import { coders } from "../../public/data/database.js";

export function getTableForEach(coders,tbody) {

    tbody.innerHTML = "";

    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
            <td>
                <button type="button" data-id=${coder.id} class="btn btn-primary">details</button>
                <button type="button" data-id=${coder.id} class="btn btn-warning">Edit</button>
                <button type="button" data-id=${coder.id} class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `
    });
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