let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (USD){
    return USD * oneEuroIs.JPY/oneEuroIs.USD;
}

function fromEuroToDollar (EUR){
    return EUR * oneEuroIs.USD;
}

function fromYenToPound (YEN){
    return YEN * oneEuroIs.GBP / oneEuroIs.JPY ;
}

module.exports = { fromDollarToYen, fromEuroToDollar,  fromYenToPound};