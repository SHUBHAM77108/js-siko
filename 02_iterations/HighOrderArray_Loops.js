const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swifr by apple"
}

for (const key in myObject) {
    //console.log(`${key}- shortcut is for -${myObject[key]}`)
}

const progtamming = ["js", "rg", "py", "java", "C++"]

for (const key in progtamming){
    console.log(progtamming[key])
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map){
//     console.log(key)
// }