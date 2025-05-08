import { containerAppointment } from "../selectors.js";
import {uploadAppointment} from '../functions.js';
export default class Appointment{
    constructor(){
        this.appointments = []
    }

    add(appointment){
        this.appointments = [...this.appointments,appointment]
        this.show()
        
    }

    edit(updatedAppointment){
        this.appointments = this.appointments.map( appointment => appointment.id === updatedAppointment.id ? updatedAppointment : appointment)
        this.show()
    }


    delete(id){
        this.appointments = this.appointments.filter(appointment => appointment.id !== id)
        this.show()
    }

    show(){
        while(containerAppointment.firstChild){
            containerAppointment.removeChild(containerAppointment.firstChild)
        }
        if(this.appointments.length === 0){
            containerAppointment.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">There are not Patients</p>'
            return;
        }


        this.appointments.forEach(appointment => {
            const appointmentDiv = document.createElement('div');
            appointmentDiv.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const patient = document.createElement('p');
            patient.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            patient.innerHTML = `<span class="font-bold uppercase">Patient: </span> ${appointment.patient}`;
        
            const owner = document.createElement('p');
            owner.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            owner.innerHTML = `<span class="font-bold uppercase">Owner: </span> ${appointment.owner}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${appointment.email}`;
        
            const date = document.createElement('p');
            date.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            date.innerHTML = `<span class="font-bold uppercase">Date: </span> ${appointment.date}`;
        
            const symptoms = document.createElement('p');
            symptoms.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            symptoms.innerHTML = `<span class="font-bold uppercase">Symptoms: </span> ${appointment.symptoms}`;



            const editBtn = document.createElement('button');
            editBtn.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');


            const appointmentClone = structuredClone(appointment)
            editBtn.onclick = () => uploadAppointment(appointmentClone)



            editBtn.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            deleteBtn.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            deleteBtn.onclick = () => this.delete(appointment.id)

            const containerButtons = document.createElement('DIV')
            containerButtons.classList.add('flex','justify-between','mt-10')
            containerButtons.appendChild(editBtn)
            containerButtons.appendChild(deleteBtn)
            appointmentDiv.appendChild(containerButtons)

                    
            // Agregar al HTML
            appointmentDiv.appendChild(patient);
            appointmentDiv.appendChild(owner);
            appointmentDiv.appendChild(email);
            appointmentDiv.appendChild(date);
            appointmentDiv.appendChild(symptoms);
            appointmentDiv.appendChild(containerButtons)
            containerAppointment.appendChild(appointmentDiv);
        });  

    }

}

