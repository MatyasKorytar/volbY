radio.set_group(299)
basic.show_leds("""
. . . . #
. . . # .
# . # . .
. # . . .
. . . . .
""")
serialnumber = control.device_serial_number()
ukol = 0
def on_pin_pressed_p0():
    if ukol == 0:
        ukol = 1
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)
volby = ["A", "B", "C", "D", "E", "F", "G"]
count = [0, 0, 0, 0, 0, 0, 0]
x = 0
odeslat = 0
def on_button_pressed_a():
    if ukol == 0:
        global x
        basic.show_string(volby[0+x])
        x += 1
        if x == len(volby):
            x = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if ukol == 0:
        global odeslat
        if odeslat == 0:
            radio.send_string(volby[0+x])
        odeslat = 1    
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_string(receivedString):
    global count
    if ukol == 1:
        if receivedString == "A":
            count[0] += 1
        elif receivedString == "B":
            count[1] += 1  
        elif receivedString == "C":
            count[2] += 1 
        elif receivedString == "D":
            count[3] += 1
        elif receivedString == "E":
            count[4] += 1 
        elif receivedString == "F":
            count[5] += 1
        elif receivedString == "G":
            count[6] += 1          
radio.on_received_string(on_received_string)
n = 0
while ukol == 1:
    basic.show_string(volby[0+n])
    basic.pause(500)
    basic.show_number(count[0+n])
    basic.pause(600)
    n += 1
    