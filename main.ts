input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.X))
})
