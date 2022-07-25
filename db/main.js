
const fs = require("fs");
const csv = require("csvtojson");
const List = require("./models/List.js")

(async () => {
    
    const companies = await csv().fromFile("/Users/tomascalle/Desktop/MFMdbb.csv");
    let hashmap = new Map();
    const groups = [[],[],[],[],[],[],[],[],[],[]]
    let done = false;

    while(!done){
        let chosenCompany
        do {
            let ran = randomNumber(0,99)
            chosenCompany = companies[ran]
        } while (hashmap.has(chosenCompany["Name"]));
        hashmap.set(chosenCompany.Name,true)

        for (const list of groups) {
            if(list.length < 10){
                list.push(chosenCompany)
                break;
            }
        }
        done = groups[9].length === 10
    }

    console.log(groups)

    // const newList = new List({
    //     data : JSON.stringify[0]
    // })
    // console.log(newList)


})();

const randomNumber = (min, max)=>{ 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
  

//     fs.writeFile('lists.json',JSON.stringify(groups), function (err) {
//     if (err) return console.log(err);
//     console.log('Done');
//     });