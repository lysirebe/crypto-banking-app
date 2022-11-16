
// beforeAll(())


describe('unit tests for UI components', () => {

    document.documentElement.innerHTML = 
    `
    <div class = 'balance'></div>
    <input type= 'number' id = 'deposit' class="input">
    <button class = 'submit' id = 'submitDeposit'>Deposit</button>
    <div class = 'balance'></div>
    <input type= 'number' id = 'withdrawal' class="input">
    <button class = 'submit' id = 'submitWithdraw'>Withdraw</button>
    <div class = 'popup'>
    <span class ='closeButton'>X</span>
    <p class = 'popupMessage'></p>
    </div>
    `

    require('../scripts/bank')

    const testDeposit = document.querySelector('#deposit')
    const balance = document.querySelector('.balance')
    const depositButton = document.querySelector('#submitDeposit')
    const testWithdrawal = document.querySelector('#withdrawal')
    const withdrawButton = document.querySelector('#submitWithdraw')
    const popupMessage = document.querySelector('.popupMessage')
    const popup = document.querySelector('.popup')

    test('withdrawal cannot be made initially', () => {
        testWithdrawal.value = 30
        withdrawButton.click()
        expect(balance.innerHTML).toBe('<h1>£0</h1>')
    })

    test('an initial dposit can be made', () => {
        testDeposit.value = 40
        depositButton.click()
        expect(balance.innerHTML).toBe('<h1>£40</h1>')
    })

    test('additional deposits can be made', () => {
        testDeposit.value = 30
        depositButton.click()
        expect(balance.innerHTML).toBe('<h1>£70</h1>')

    })

    test('withdrawal can be made', () => {
        testWithdrawal.value = 50
        withdrawButton.click()
        expect(balance.innerHTML).toBe('<h1>£20</h1>')
    })

    test('correct message is displayed', () => {
        testWithdrawal.value = 10
        withdrawButton.click()
        expect(popup.style.visibility).toBe('visible')
        expect(popupMessage.textContent).toEqual('£10 has been succsesfully withdrawn')

    })

    


})
