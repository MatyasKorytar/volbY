#KLIENT
radio.set_group(299)
hlasovani = 0
if hlasovani == 0:
    basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)
def on_received_number(receivedNumber):
    hlasovani = 1
radio.on_received_number(on_received_number)
if hlasovani == 1:
    basic.show_leds("""
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    """)

volby = ["A", "B", "C", "D", "E", "F", "G"]
count = [0, 0, 0, 0, 0, 0, 0]
x = 0
odeslat = 0
hlas = 0

#výběr hlasu
def on_button_pressed_a():
        global x
        global hlas
        if hlasovani == 1:
            basic.show_string(volby[0+x])
            hlas = x
            x += 1
            if x == len(volby):
                x = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

#odeslání hlasu
def on_button_pressed_b():
        global odeslat
        if hlasovani == 1:
            if odeslat == 0:
                radio.send_string(volby[hlas])
                odeslat = 1    
input.on_button_pressed(Button.B, on_button_pressed_b)