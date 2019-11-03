//Exercise 1


const generator = $(".generator")
const validator = $(".validator")

const cmp_id = []

$(generator).click(function () {
    const ProcessorId = $(this).closest(".processor").attr('id')
    console.log(ProcessorId)
    const dataID = $(this).closest(".computer").attr("data-id")
   console.log(dataID)
   const BUS = $(this).closest(".computer").find(".BUS").text()
   cmp_id.push(dataID)k☻
console.log(BUS)

})


$(validator).click(function(){
    const genText = $(this).text()
    console.log(genText)
    const MB = $(this).closest(".computer").find(".MB").text()
console.log(MB)
const QR = $(this).closest(".computer").find(".QR").text( )
console.log(QR)
})