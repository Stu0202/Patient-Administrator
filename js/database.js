
import { appointmentObj } from "./variables.js";

export let DB;

export function createDB(){
    const createDB = window.indexedDB.open('appoinments',1)

    createDB.onerror = function(){
        console.log('error');
    }
    createDB.onsuccess = function () {
        console.log('Creado');
        DB=createDB.result
        console.log(DB);
    }

    createDB.onupgradeneeded = function (e) {
        const db = e.target.result
         const objectStore = db.createObjectStore('appoinments', {
            keyPath: appointmentObj.id,
            autoIncrement:true
        })
       
         objectStore.createIndex('patient','patient',{unique:false})
         objectStore.createIndex('owner','owner',{unique:false})
         objectStore.createIndex('email','email',{unique:false})
         objectStore.createIndex('date','date',{unique:false})
         objectStore.createIndex('symptoms','symptoms',{unique:false})
         objectStore.createIndex('id','id',{unique:true})
    }
}