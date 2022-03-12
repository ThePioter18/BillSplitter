const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count-btn')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')

const checkField = () => {
	const priceToPay = price.value
	const countPeople = people.value
	const selectTip = tip.value

	if (selectTip === '0' || !priceToPay || !countPeople) {
		error.textContent = 'Błąd! Musisz uzupełnić wszystkie pola'
		costInfo.style.display = 'none'
	} else {
		error.textContent = ''

		calculateBill(priceToPay, countPeople, selectTip)
	}
}

const calculateBill = (priceToPay, countPeople, selectTip) => {
	const newTip = parseFloat(priceToPay) * parseFloat(selectTip)
	const sum = parseFloat(priceToPay) + newTip

	const bill = sum / parseInt(countPeople)

	cost.textContent = bill.toFixed(2)

	costInfo.style.display = 'block'
}

countBtn.addEventListener('click', checkField)
