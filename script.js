const inputs = document.getElementById('inputs').elements;

const distanceValue = () => Math.abs(inputs['distance-input'].value);
const priceValue = () => Math.abs(inputs['price-input'].value);
const discountValue = () => Math.abs(inputs['discount-input'].value);
const lphValue = () => Math.abs(inputs['lph-input'].value);

const moneyToSomewhereAndBack = (dist = distanceValue(), price = priceValue(), discount = discountValue(), lph = lphValue()) => Math.floor(dist / 100 * lph * (price - discount));

const printedResult = document.getElementById('printedResult');
const result = () => printedResult.innerHTML = moneyToSomewhereAndBack() + ` грн`;

const year = document.getElementById('year');
const d = new Date();
const y = d.getFullYear();
year.innerHTML = y;