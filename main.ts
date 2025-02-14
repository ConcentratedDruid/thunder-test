function lightning_rainbow () {
    for (let index = 0; index < randint(10, 100); index++) {
        pixel_no = randint(0, 12)
        strip.setPixelColor(pixel_no, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
        basic.pause(20)
        strip.setPixelColor(pixel_no, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
}
function Lightning_full () {
    for (let index = 0; index < randint(5, 50); index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(20)
        strip.clear()
        strip.show()
    }
}
input.onButtonPressed(Button.A, function () {
    mode += -1
    mode = Math.constrain(mode, 0, 4)
})
input.onSound(DetectedSound.Loud, function () {
    if (mode == 1) {
        lightning_line()
    } else if (mode == 2) {
        Lightning_random()
    } else if (mode == 3) {
        Lightning_full()
    } else if (mode == 4) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    mode += 1
    mode = Math.constrain(mode, 0, 4)
})
function lightning_line () {
    range = strip.range(randint(0, 12), randint(0, 5))
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < randint(5, 200); index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(10)
    }
    strip.clear()
    strip.show()
}
function Lightning_random () {
    for (let index = 0; index < randint(10, 100); index++) {
        pixel_no = randint(0, 12)
        strip.setPixelColor(pixel_no, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(20)
        strip.setPixelColor(pixel_no, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
}
let random_mode = 0
let range: neopixel.Strip = null
let pixel_no = 0
let mode = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
mode = 0
basic.showNumber(mode)
basic.forever(function () {
    basic.showNumber(mode)
})
basic.forever(function () {
    if (mode == 0) {
        random_mode = randint(0, 3)
        if (random_mode == 0) {
            lightning_line()
        } else if (random_mode == 1) {
            Lightning_random()
        } else if (random_mode == 2) {
            Lightning_full()
        } else if (random_mode == 3) {
            lightning_rainbow()
        } else {
        	
        }
        basic.pause(randint(1000, 5000))
    }
})
