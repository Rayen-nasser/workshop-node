const fs = require("fs");

const loadData = () => {
  try {
      const dataJson = fs.readFileSync("data10.json").toString();
      const parsedData = JSON.parse(dataJson);
      return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
      return [];
  }
};


const saveAllData = (allData) => {
    const allDataJson = JSON.stringify(allData);
    console.log(allDataJson);
    fs.writeFileSync("data10.json", allDataJson);
};

const addPerson = ({id, fname, lname, age, city}) => {
    const allData = loadData();

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id;
    });

    if (duplicatedData.length === 0) {
        allData.push({
            id,
            fname,
            lname,
            age,
            city,
        });

        saveAllData(allData);
    } else {
        console.log("ERROR: DUPLICATED ID");
    }
};

const getAll = () => {
    const allData = loadData();

    return allData || "No data available";
};

const findById = (id) => {
    const allData = loadData();

    const dataToKeep = allData.find((obj) => {
        return obj.id === id;
    });

    return dataToKeep ||  "NOT FOUND";
};


const deleteData = (id) => {
    const allData = loadData();

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id;
    });

    saveAllData(dataToKeep);

    console.log("You have successfully deleted an item.");
};

module.exports = {
    addPerson,
    deleteData,
    getAll,
    findById
};
