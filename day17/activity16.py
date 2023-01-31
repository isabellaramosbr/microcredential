"""
Isabella Ramos
Day 17 - Intro to Python
Monday, Jan 30th 2023
"""

"""
#Example 1  - Using the print() function
print('Isabella')
print('------example 1-------')
name = 'Isabella Ramos'
number = 2.5
print('My name is: ',name, ' and my lucky number is: ', number)


#Example 2 - Using input() function
print('------example 2-------')
lastName = input('Enter a last name: ')
num1 = int(input('Enter a number: '))
print('Last name = ', lastName, '\n Enter number = ', num1,'\n The double of the number is = ', num1*2)
"""

#Example 3 - 
print('------example 3-------')
h = float(input('Enter a height: '))
w = float(input('Enter a weight: '))
hyp = (h**2 + w**2)**0.5
print('Hypotenuse = ', hyp)


# Class Activity
print('------Class activity-------')

"""

Write a Python code that will ask the user to enter a radius and a height from the keyboard --> input()
Once the values are collected, calculate the area of a circle, the circunference, and the volume of the sphere.
To calculate area = 3.1416*radius**2
To calculate the circunference = 2*3.1416*radius
To calculate the volume = area*height
"""


radius = float(input('Enter a radius: '))
height = float(input('Enter a height: '))

a = (3.1416*radius**2)
c = (2*3.1416*radius)
v = (a*h)

print('Area = ', a)
print('Circunference = ', c)
print('Volume = ', v)




#Example 4 - 
print('-----example 4-------')

#assign a value
number1 = 8
print('Number = ' ,number1)
#self add +=
number1 += 3
print('Self add = ' ,number1)
#self subtract -=
number1 -= 5
print('Self subtract = ', number1)
#remainder of self division %=
number1 %= 4
print('Remainder after the division by 4 = ', number1)
# using %s marker on print()
print('The height = %s and width = %s. The calculation for the hypotenuse is %s ' %(h, w, hyp))

#Example 5 - 
print('------example 5: string-------')
#find a character in a string using index
msg ='Queensborough'
#print the 3rd and 7th character in string msg
print('The 3rd character is = ', msg[2])
print('The 7th character is = ', msg[6])
#slice in a string
print('From the 5th to the 10th character: ', msg[4:9])
lenMsg = len(msg)
print('The lenght is = ', lenMsg)
#upper() method
msgUpper = msg.upper()
print(msgUpper)
#replace() method
msgReplace = msg.replace('e','$')
print(msgReplace)
#in operator
msgIn = 'm' in msg
print('Is m in the message?', msgIn)



#Example 6 -
print('------example 6: list-------')
#create list of animals
animals = ['cat','dog', 'parrot','fish', 'rat']
print('2nd animal = ', animals[1])
#delete te 3rd item in the list
del animals[2]
print(animals)
#ask the user to input an animal. The new animal will be added to the existing list
a = input('Enter an animal: ')
animals.append(a)
print(animals)

