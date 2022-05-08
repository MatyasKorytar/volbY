// KLIENT
radio.setGroup(299)
let hlasovani = 0
if (hlasovani == 0) {
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
}

radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let hlasovani = 1
})
if (hlasovani == 1) {
    basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
}

let volby = ["A", "B", "C", "D", "E", "F", "G"]
let count = [0, 0, 0, 0, 0, 0, 0]
let x = 0
let odeslat = 0
let hlas = 0
// výběr hlasu
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    
    if (hlasovani == 1) {
        basic.showString(volby[0 + x])
        hlas = x
        x += 1
        if (x == volby.length) {
            x = 0
        }
        
    }
    
})
// odeslání hlasu
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (hlasovani == 1) {
        if (odeslat == 0) {
            radio.sendString(volby[hlas])
            odeslat = 1
        }
        
    }
    
})
