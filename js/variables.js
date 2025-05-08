import {generateID} from './functions.js'
let editing = {
    value: false
}


//Appointment Object

const appointmentObj = {
    id: generateID(),
    patient: '',
    owner: '',
    email: '',
    date: '',
    symptoms: ''
}
export {
    editing,
    appointmentObj
}