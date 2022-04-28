radio.setGroup(299)
basic.showLeds(`
. . . . #
. . . # .
# . # . .
. # . . .
. . . . .
`)
let serialnumber = control.deviceSerialNumber()
let ukol = 0
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    let ukol: number;
    if (ukol == 0) {
        ukol = 1
    }
    
})
let volby = ["A", "B", "C", "D", "E", "F", "G"]
let count = [0, 0, 0, 0, 0, 0, 0]
let x = 0
let odeslat = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (ukol == 0) {
        
        basic.showString(volby[0 + x])
        x += 1
        if (x == volby.length) {
            x = 0
        }
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (ukol == 0) {
        
        if (odeslat == 0) {
            radio.sendString(volby[0 + x])
        }
        
        odeslat = 1
    }
    
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (ukol == 1) {
        if (receivedString == "A") {
            count[0] += 1
        } else if (receivedString == "B") {
            count[1] += 1
        } else if (receivedString == "C") {
            count[2] += 1
        } else if (receivedString == "D") {
            count[3] += 1
        } else if (receivedString == "E") {
            count[4] += 1
        } else if (receivedString == "F") {
            count[5] += 1
        } else if (receivedString == "G") {
            count[6] += 1
        }
        
    }
    
})
let n = 0
while (ukol == 1) {
    basic.showString(volby[0 + n])
    basic.pause(500)
    basic.showNumber(count[0 + n])
    basic.pause(600)
    n += 1
}
