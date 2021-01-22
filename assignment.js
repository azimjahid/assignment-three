// https://github.com/azimjahid/assignment-three


// Problem One: kilometerToMeter
// Problem one start
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter
}
var ctgToDhaka = kilometerToMeter(220);
console.log(ctgToDhaka);
// Problem one end

// Problem Two: budgetCalculator
// Problem two start
function budgetCalculator(watch, phone, laptop) {
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var total = watch + phone + laptop;
    return total
}
var totalBudget = budgetCalculator(7, 5, 3);
console.log(totalBudget);
// Problem two end

// Problem Three: hotelCost
// Problem three start
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;

    } else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var thirdTenDays = remainingDays * 50;
        var cost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return cost
}
var totalCost = hotelCost(28);
console.log(totalCost);
// Problem three end

// Problem 4:megaFriend
// Problem four start
function megaFriend(friends) {
    if (friends.length > 0) {
        var richFriend = friends[0];
        for (var i = 0; i < friends.length; i++) {
            var poorFriend = friends[i];
            if (typeof poorFirend === "number") {
                return "Array Element can't be a number!";
            } else {
                if (poorFriend.length > richFriend.length) {
                    richFriend = poorFriend;
                }
            }
        }
        return richFriend;
    }
}
var friends = ["Azim Ahmed", "Azim Jahid", "Regan Ahmed"];
var ModernFriend = megaFriend(friends);
console.log(ModernFriend);
// Problem four end