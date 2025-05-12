
import {patientInput,ownerInput,emailInput,dateInput,symptomsInput,form} from './selectors.js'
import {appointmentData,submitAppoinment} from './functions.js'
import { createDB} from './Database.js'
import Appointment from './classes/Appoinment.js'


const appointment = new Appointment
even()
function even(){
    document.addEventListener('DOMContentLoaded',()=>{
        createDB(appointment)
    })
}
// window.onload = () => {
//     createDB(appointment)
// }
//Events
patientInput.addEventListener('change', appointmentData )
ownerInput.addEventListener('change', appointmentData )
emailInput.addEventListener('change', appointmentData )
dateInput.addEventListener('change', appointmentData )
symptomsInput.addEventListener('change', appointmentData )
form.addEventListener('submit', submitAppoinment)













