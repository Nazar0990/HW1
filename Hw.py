#string = input('Enter a string: ')

#letter = 0

#digit = 0

#for char in string:

 #  if char.isalpha():

#       letter += 1

#   elif char.isdigit():

#       digit += 1

#print( "letters:", letter)

#print("number:", digit)

#print("_______________________________________")

#string = input('Enter a string: ')
#symbol = input('Enter a symbol: ')

#count = 0
#for char in string:
#    if char == symbol:
#        count += 1

#print("Number:", count)

#print("_______________________________________")

#string = input("Enter a string: ")

#reversed_string = " "
#for char in string:
#    reversed_string = char + reversed_string

#print('string:', reversed_string)

#print("_______________________________________")

#string = input('Enter a string: ')
#word = input('Enter a word to search: ')

#count = 0
#i = 0
#while i <= len(string) - len(word):
#    if string[i:i+len(word)] == word:
#        count += 1
#        i += len(word)  
#    else:
#        i += 1

#print('Number :', count)

#print("_______________________________________")

#string = input('Enter a string: ')
#oword = input('Enter the oword: ')
#nword = input("Enter the n word: ")

#new_string = string.replace(oword, nword)
#print("New string:", new_string)

#print("_______________________________________")

string = input("Enter a string: ")

words = string.split()
max_word = ""
for word in words:
    if len(word) > len(max_word):
        max_word = word

print('Longest word:', max_word)