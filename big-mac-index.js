console.log("Switzerland 6.5 Franc")
console.log("Canada 6.77 Canadian Dollar")
console.log("Australia 6.55 Australian Dollar")
console.log("Uk 3.49 Paund")
console.log("Norway 57 Krona")
console.log("Usa 5.65 Dollar")



const macPriceUsa = 5.65
const macPriceSwitzerland = 6.5
const PPPchf = macPriceUsa / macPriceSwitzerland
console.log(PPPchf)
let chfCurrency = 1.08445
const switzerlandIndex = ( chfCurrency - PPPchf ) / PPPchf * 100
console.log(switzerlandIndex)

const macPriceCanada = 6.77 
const PPPcd = macPriceUsa / macPriceCanada
console.log(PPPcd)
let cdCurrency = 0.798599
const canadaIndex = ( cdCurrency - PPPcd ) / PPPcd * 100
console.log(canadaIndex)

const macPriceUK = 3.49
const PPPuk = macPriceUsa / macPriceUK
console.log( PPPuk)
let ukCurrency = 1.34394
const ukIndex = ( ukCurrency - PPPuk ) / PPPuk * 100
console.log(ukIndex)

const macPriceAustralia = 6.55
const PPPaustralia = macPriceUsa / macPriceAustralia
console.log(PPPaustralia)
let australiaCurrency = 0.735827
const australiaIndex = ( australiaCurrency - PPPaustralia ) / PPPaustralia * 100
console.log(australiaIndex)

const macPriceNorway = 57 
const PPPnorway = macPriceUsa / macPriceNorway
console.log(PPPnorway)
let norwayCurrency = 0.114936
const norwayIndex = ( norwayCurrency - PPPnorway ) / PPPnorway * 100
console.log(norwayIndex)






