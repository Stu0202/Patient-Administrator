import {form} from '../selectors.js'
export default class Notification{
    constructor({text,type}){
        this.text = text
        this.type = type

        this.show()
    }

    show(){
        
        const alert = document.createElement('DIV')
        alert.classList.add('text-center','w-full','text-white','p-3','my-5','alert','uppercase','font-bold','text-sm')

        //Delete duplicate alerts
        const previousAlert = document.querySelector('.alert')
        previousAlert?.remove()
        

        this.type === 'error' ? alert.classList.add('bg-red-500') : alert.classList.add('bg-green-500')

        alert.textContent = this.text

        form.parentElement.insertBefore(alert,form)
        
        setTimeout(() => {
            alert.remove()
        }, 3000);
    }
}