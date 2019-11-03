//Exercise 1/ .

const StringFormatter = function () {

    const capitalizeFirst = function (name) {
        const lower = (name).toLowerCase();
        const caps = lower.charAt(0).toUpperCase()
        const xcaps = lower.slice(1)
        console.log(caps + xcaps)

    }

    const skewerCase = function (word) {
        const hyphanated = word.replace(/ +/g, '-')
        console.log(hyphanated)
    }


    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const sum = function(x, y) {
    return x + y
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") 
formatter.skewerCase("blue box") 

