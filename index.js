const list = document.querySelector('#contactList')
const name = document.querySelector('#inputName')
const surname = document.querySelector('#inputSurname')
const phone = document.querySelector('#inputPhone')
const button = document.querySelector('#btnAdd')

button.addEventListener('click', onButtonClick)

function onButtonClick() {
    const person = getPersonData()

    if(isPersonDataValid(person)) {
        renderList(person)
        clear()
    } else {
        showError()
    }
}
function getPersonData() {
    return {
        name : name.value,
        surname : surname.value,
        phone : phone.value
    }
}

function isPersonDataValid(person) {
    return (person.name !== '') && (person.surname !== '') && (person.phone !== '') && (isNaN(person.phone) === false)
}

function renderList(person) {
    const htmlPerson = `
    <tr>
        <td>${person.name}</td>
        <td>${person.surname}</td>
        <td>${person.phone}</td>
    </tr>
    `

    list.insertAdjacentHTML('beforeend', htmlPerson)
}

function clear() {
    name.value = ''
    surname.value = ''
    phone.value = ''
}

function showError() {
    alert('Заполните поля')
}

