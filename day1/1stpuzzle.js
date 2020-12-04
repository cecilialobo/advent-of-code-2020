const fs = require("fs");

const logicToFindTheSumOfTwo = () => {
    const inputData = fs.readFileSync("inputday1.txt", "utf8");
    const dataArray = inputData.split("\n");    
    dataArray.forEach((item) => {
        dataArray.forEach((item2) => {
            if (Number(item) + Number(item2) === 2020) {
                const result = Number(item) * Number(item2);
                console.log(result);
            }
            return;
        })
    })
}

logicToFindTheSumOfTwo();