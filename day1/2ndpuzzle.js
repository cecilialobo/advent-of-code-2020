const fs = require("fs");

const logicToFindTheSumOfThree = () => {
    const inputData = fs.readFileSync("inputday1.txt", "utf8");
    const dataArray = inputData.split("\n");    
    dataArray.forEach((item) => {
        dataArray.forEach((item2) => {
            dataArray.forEach((item3) => {
                if (Number(item) + Number(item2) + Number(item3) === 2020) {
                    const result = Number(item) * Number(item2) * Number(item3);
                    console.log(result);
                }
            })
            return;
        })
    })
}

logicToFindTheSumOfThree();

