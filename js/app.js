
import {patientInput,ownerInput,emailInput,dateInput,symptomsInput,form} from './selectors.js'
import {appointmentData,submitAppoinment} from './functions.js'

//Events
patientInput.addEventListener('change', appointmentData )
ownerInput.addEventListener('change', appointmentData )
emailInput.addEventListener('change', appointmentData )
dateInput.addEventListener('change', appointmentData )
symptomsInput.addEventListener('change', appointmentData )
form.addEventListener('submit', submitAppoinment)













