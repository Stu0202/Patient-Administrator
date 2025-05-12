import {appointmentObj,editing} from './variables.js'

import Appointment from './classes/Appoinment.js'
import Notification from './classes/Notification.js'
import {form,formInput,patientInput,ownerInput,dateInput,symptomsInput,emailInput} from './selectors.js'
import { DB } from './Database.js'

const appointments = new Appointment()

export function appointmentData(e) {
    appointmentObj[e.target.name]=e.target.value
    
}
export function submitAppoinment(e){
    e.preventDefault()

    if(Object.values(appointmentObj).some( value => value.trim()==='')){
        new Notification({
            text: 'All fields are required',
            type: 'error'
        })
        return;
    }

    if(editing.value){
        appointments.edit({...appointmentObj})
        new Notification({
            text: 'Appointment updated successfully',
            type: 'exito'
        })
    }else{
        appointments.add({...appointmentObj})
        const transaction = DB.transaction(['appoinments'],'readwrite')
        const objectStore = transaction.objectStore('appoinments')
        objectStore.add(appointmentObj)
        transaction.oncomplete = function () {
            console.log('Exito');
             new Notification({
            text: 'Appointment added successfully',
            type: 'exito'
        })
        }
       
    }


    form.reset()
    resetAppointmentObj()
    formInput.value = "Register Patient"
    editing.value = false

}

export function resetAppointmentObj(){
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

export function generateID(){
    return Math.random().toString(36).substr(2) + Date.now();
}

export function uploadAppointment(appointment){
    Object.assign(appointmentObj,appointment)
    patientInput.value = appointment.patient
    ownerInput.value = appointment.owner
    emailInput.value = appointment.email
    dateInput.value = appointment.date
    symptomsInput.value = appointment.symptoms
    editing.value = true

    formInput.value = "Update Patient"
}