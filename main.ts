let die = 0
let counter = 0
input.onButtonPressed(Button.A, function () {
    die = randint(1, 6) + (randint(1, 6) + randint(1, 6))
    counter = 0
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 4; x++) {
            if (counter < die) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            basic.pause(50)
            counter += 1
        }
    }
})
basic.forever(function () {
	
})
