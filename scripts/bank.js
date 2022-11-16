class UI{
    constructor() {
        this.depositInput = document.querySelector('#deposit')
        this.withdrawalInput = document.querySelector('#withdrawal')
        this.balance =  0
        this.popupMessage = document.querySelector('.popupMessage')
        this.popup = document.querySelector('.popup')
        this.timer = ''
        this.transactions =[]
    }

    deposit() {

        const amount = this.depositInput.value
        this.balance += Number(amount)
        this.popupMessage.innerHTML =`<p>£${amount} has been succsesfully deposited</p>`
        this.displayPopup()
        this.updateBalance()
    }

    withdraw(){
        const amount = this.withdrawalInput.value
        if(amount < this.balance){
            this.balance -= amount
            this.popupMessage.innerHTML =`<p>£${amount} has been succsesfully withdrawn</p>`
        } else {
            this.popupMessage.innerHTML =`<p>Withdraw unsuccsesful due to insufficient funds</p>`
        }
        this.displayPopup()
        this.updateBalance()
    }

    updateBalance() {
        document.querySelector('.balance').innerHTML = `<h1>£${this.balance}</h1>`
    }

    displayPopup(){
        this.popup.style.visibility = 'visible'
        this.timer = setTimeout(() => {
            this.popup.style.visibility = 'hidden'
        }, 4000)
    }
    // this.popup.classList.toggle('showPopup')

    closePopup(){
        this.popup.style.visibility = 'hidden'
        clearTimeout(this.timer)
        
    }
}

function eventListeners() {
     let timer;
     const withdrawButton = document.querySelector('#submitWithdraw')
     const depositButton = document.querySelector('#submitDeposit')
     const closeButton = document.querySelector(".closeButton")

     const ui = new UI()

     withdrawButton.addEventListener('click', () =>{
        ui.withdraw()
     })

     depositButton.addEventListener('click', () => {
        ui.deposit()
     })

    //  function windowClicked(){
    //         console.log('hello')
    //         ui.closePopup()
    //     }

    // document.addEventListener('click', (e) => {
    //     const isClosest = e.target.closest(ui.popup)
    //     if(!isClosest && ui.popup.style.visibility === 'visible'){
    //         console.log('pop up closed')
    //         ui.closePopup()
    //     }
    // })

    closeButton.addEventListener('click', () => {
        ui.closePopup()
    })
}
document.querySelector('.balance').innerHTML = `<h1>£0</h1>`
eventListeners()
