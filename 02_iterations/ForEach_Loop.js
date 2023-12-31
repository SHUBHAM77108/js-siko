const coding = ["js", "rg", "py", "java", "C++"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


// // this is all take out index of arr and arr lengths
// coding.forEach( (item, indexx, arr) => {
//     console.log(item, indexx, arr)
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageFileName)
})