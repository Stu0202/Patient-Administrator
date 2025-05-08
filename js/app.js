import Notification from "./classes/Notification.js"
import Appointment from "./classes/Admin.js"
import {patientInput,ownerInput,emailInput,dateInput,symptomsInput,formInput,form,containerAppointment} from './selectors.js'

//Events
patientInput.addEventListener('change', appointmentData )
ownerInput.addEventListener('change', appointmentData )
emailInput.addEventListener('change', appointmentData )
dateInput.addEventListener('change', appointmentData )
symptomsInput.addEventListener('change', appointmentData )
form.addEventListener('submit', submitAppoinment)


let editing = false


//Appointment Object

const appointmentObj = {
    id: generateID(),
    patient: '',
    owner: '',
    email: '',
    date: '',
    symptoms: ''
}







function appointmentData(e) {
    appointmentObj[e.target.name]=e.target.value
    
}

const appointments = new Appointment()



function submitAppoinment(e){
    e.preventDefault()

    if(Object.values(appointmentObj).some( value => value.trim()==='')){
        new Notification({
            text: 'All fields are required',
            type: 'error'
        })
        return;
    }

    if(editing){
        appointments.edit({...appointmentObj})
        new Notification({
            text: 'Appointment updated successfully',
            type: 'exito'
        })
    }else{
        appointments.add({...appointmentObj})
        new Notification({
            text: 'Appointment added successfully',
            type: 'exito'
        })
    }


    form.reset()
    resetAppointmentObj()
    formInput.value = "Register Patient"
    editing = false

}

function resetAppointmentObj(){
    // appointmentObj.patient = ''
    // appointmentObj.owner = ''
    // appointmentObj.email = ''
    // appointmentObj.date = ''
    // appointmentObj.symptoms = ''

    Object.assign(appointmentObj,{
        id: generateID(),
        patient: '',
        owner: '',
        email: '',
        date: '',
        symptoms: ''
    })
}

function generateID(){
    return Math.random().toString(36).substr(2) + Date.now();
}

function uploadAppointment(appointment){
    Object.assign(appointmentObj,appointment)
    patientInput.value = appointment.patient
    ownerInput.value = appointment.owner
    emailInput.value = appointment.email
    dateInput.value = appointment.date
    symptomsInput.value = appointment.symptoms
    editing = true

    formInput.value = "Update Patient"
}
