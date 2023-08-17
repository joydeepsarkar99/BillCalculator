// Get global access to all inputs
// bill input, tip input, number of people div, and per person total div

const billTotalInputDiv = document.getElementById('billTotalInput')
const tipInputDiv = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let noOfPeople = Number(numberOfPeopleDiv.innerText)


//Calculate the total bill per person 
const calculateBill = () => {
    const billInput = Number(billTotalInputDiv.value)
    const tipPercentage = Number(tipInputDiv.value)/100
    const totalTipAmount = billInput * tipPercentage
    const totalBillAmount = billInput + totalTipAmount
    const perPersonTotal = totalBillAmount / noOfPeople
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  
//Splits the bill between more people 
  const increasePeople = () => {
    noOfPeople ++
    numberOfPeopleDiv.innerText = noOfPeople
    calculateBill()
  }
  
//Splits the bill between fewer people 
  const decreasePeople = () => {
    if(noOfPeople <= 1) return
    noOfPeople--
    numberOfPeopleDiv.innerText = noOfPeople
    calculateBill()
  }