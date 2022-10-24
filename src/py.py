import random

def getRandomWord(wordList):
   # This function returns a random string from the passed list of strings.
   wordIndex = random.randint(0, len(wordList) - 1)
   print(wordIndex)
   print(wordList[wordIndex])
   
   return wordList[wordIndex]

getRandomWord(['abc', 'eee','def','ghi','jkl'])

def displayBoard(missedLetters, correctLetters, secretWord):
   # print(HANGMAN_PICS[len(missedLetters)])
   print()
   print('Missed letters:', end=' ')
   for letter in missedLetters:
      print(letter, end=' ')
   print()
   blanks = '_' * len(secretWord)
   for i in range(len(secretWord)): # Replace blanks with correctly guessed letters.
      if secretWord[i] in correctLetters:
         blanks = blanks[:i] + secretWord[i] + blanks[i+1:]
   for letter in blanks: # Show the secret word with spaces in between each letter.
      print(letter, end=' ')
      print()