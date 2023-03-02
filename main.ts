let sumX = 0
let sumY = 0
let sumZ = 0
setup()

input.onButtonPressed(Button.A, function() {
    let x = 2
    let y = 2
while(true) {
    led.plot(x, y)
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    let accZ = input.acceleration(Dimension.Strength)
 
    if (accX - sumX < -150 && x > 0) {
        x += -1
    } else if (accX - sumX > +150 && x < 4) {
        x += 1
    }
    if (accY -sumY < -150 && y > 0) {
        y += -1
    } else if (accY - sumY> +150 && y < 4) {
        y += 1
    }
    basic.pause(250)
    basic.clearScreen()
}
})

function setup() {
    for (let i = 75; i > -1; i--) {
        sumX = sumX + input.acceleration(Dimension.X)
        sumY = sumY + input.acceleration(Dimension.Y)
        sumZ = sumZ + input.acceleration(Dimension.Z)
        whaleysans.showNumber(i)
        basic.pause(40)
    }
    sumX / 75
    sumY / 75
    sumZ / 75
    basic.showString('A')
}