let nivel = 0
basic.clearScreen()
serial.redirectToUSB()
basic.forever(function () {
    nivel = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(nivel)
    basic.pause(500)
    serial.writeValue("sensor", nivel)
})
