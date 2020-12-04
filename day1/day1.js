const fs = require("fs");

const logicToFindTheSumOfTwo = () => {
    const inputData = fs.readFileSync("inputday1.txt", "utf8");
    const dataArray = inputData.split("\n");    
    dataArray.forEach((item) => {
        dataArray.forEach((item2) => {
            if (Number(item) + Number(item2) === 2020) {
                return Number(item) * Number(item2);
            }
            return;
        })
    })
}

const logicToFindTheSumOfThree = () => {
    const inputData = fs.readFileSync("inputday1.txt", "utf8");
    const dataArray = inputData.split("\n");    
    dataArray.forEach((item) => {
        dataArray.forEach((item2) => {
            dataArray.forEach((item3) => {
                if (Number(item) + Number(item2) + Number(item3) === 2020) {
                    return Number(item) * Number(item2) * Number(item3);
                }
            })
            return;
        })
    })
}

//Can improve this with binary search
//.readFileSync
//.split("\n")

