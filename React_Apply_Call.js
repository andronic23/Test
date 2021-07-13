function  pay(acountId,amount) {
  console.log(`paying ${amount} to ${acountId}`)
}
function watchDog(context,target) {
    let oldTarget = context[target.name]
    context[target.name] = function () {
        console.info(`LOG: function "${oldTarget.name}" begin`)
        let result = oldTarget.apply(context,arguments)
        console.info(`LOG: function "${oldTarget.name}" end`)
        return result
    }

}

watchDog(window,pay)
pay(123456, 100.00)


// ------OUTPUT----------->
//LOG: function "pay" begin
// paying 100 to 123456
//LOG: function "pay" end
