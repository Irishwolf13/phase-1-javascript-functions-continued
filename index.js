function saturdayFun(value = "roller-skate") {
    return `This Saturday, I want to ${value}!`
}

const mondayWork = function (value = "go to the office") {
    return `This Monday, I will ${value}.`
}

function wrapAdjective(visualFlair = "*") {
    return function (value = 'special') {
        return `You are ${visualFlair}${value}${visualFlair}!`
    }
}