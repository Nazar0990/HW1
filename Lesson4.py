#myString = "hellO world"
#print(id(myString))
#print(type(myString))
#print(myString)
#myString = 'hello world'
#myString1 = 'hello world'
##print(id(myString))
#print(id(myString1))
#print(len(myString))
#name = "John"
#position = "Admin"
#fullposition = name + " " + position
#print(fullposition.swapcase())
#print(myString.lower().startswith("HellO".lower()))
#print(myString.count("1",6,-1))
#print(myString.index("z"))
#print(myString.isalnum())
#print(myString.isalpha())
#print("SPR521".center(30,"*"))
#myNewStr = myString1[::2]
#print(myNewStr)
#someTitle = " Sigmaboy Sigmaboy \"Sigma\" \nSigmaboy \\Sigmaboy Sigmaboy Sigmaboy"
#name = input("Enter your name")
#age = input("Enter your age")
#print("Welcome to Python {} and you have {} tears old".format(name="Yurii", age=31))

#PI = 3.1446
#print("{0")

string = input("Enter symbol :")
print(len(string))
print(string.instnum())

string = int(input("Enter symbol :"))
letters = 0
digt = 0
for o in string:
    if o.isalpha():
        letters += 1
    elif o .indigit():
        digt += 1
        
        print("Letter")
        print("Number")


string = input('Enter a string: ')

letter_count = 0

digit_count = 0

for char in string:

   if char.isalpha():

       letter_count += 1

   elif char.isdigit():

       digit_count += 1

print('Number of letters:', letter_count)

print('Number of digits:', digit_count)