//STEP 1
// let stringToSort = 'webmaster'

// function alphabetizeStringCharacters(inputString) {
//     let inputArray = []

//     for (let i = 0; i < inputString.length; i++) {
//         inputArray[i] = inputString.charAt(i)
//     }

//     inputArray = inputArray.sort()

//     let sortedString = ''

//     for (let i = 0; i < inputArray.length; i++) {
//         sortedString += inputArray[i]
//     }

//     return sortedString
    
// }

// console.log(alphabetizeStringCharacters(stringToSort))

//STEP 2
// let stringToCapitalize = "the QuicKK brOwn fox"

// function firstLetterUppercase(inputString) {
//     let wordArray = inputString.split(' ')
//     let finalString = ''

//     for (let i = 0; i < wordArray.length; i++) {
//         wordArray[i] = wordArray[i].slice(0,1).toUpperCase().concat(wordArray[i].slice(1,wordArray[i].length))
//         finalString = wordArray.join(' ')        
//     }

//     return finalString
// }

// console.log(firstLetterUppercase(stringToCapitalize))

//STEP 3
// let stringToCountVowels = 'The quick brown fox'

// function countVowels(inputString) {
//     let myRegex = /[aeiou]/gi; 
//     return inputString.match(myRegex).length;
// }

// console.log(countVowels(stringToCountVowels))

//STEP 4
// function randomStringGenerator() {
//     let randomString = ''
//     let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let tempLetter = ''

//     // randomly select each letter
//     for (let i = 0; i < 8; i++) {
//         tempLetter = letters[Math.round(25*Math.random())]
//         if (Math.random()>0.5) {
//             tempLetter = tempLetter.toUpperCase()
//         }

//         randomString += tempLetter
//     }  

//     return randomString
// }

// console.log(randomStringGenerator())

//STEP 5
// function Longest_Country_Name(arrCountryNames) {
//     let currentMax = 0
//     let currentLongestItemIndex

//     for (let i = 0; i < arrCountryNames.length; i++) {
//         const element = arrCountryNames[i]
//         if (element.length>currentMax) {
//             currentMax = element.length
//             currentLongestItemIndex = i
//         }
        
//     }

//     return arrCountryNames[currentLongestItemIndex]

// }

// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))