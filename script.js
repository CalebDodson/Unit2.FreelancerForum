// fetching elements from html
const nameColumn = document.querySelector("#name-column");
const occupationColumn = document.querySelector("#occupation-column");
const priceColumn = document.querySelector("#price-column");
const averagePrice = document.querySelector("#subheader");

// array of initial freelancers filled with objects containing name, occupation, and price
const initialFreelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    }
];

// array of freelancers filled with objects containing name, occupation, and price
const freelancers = ["Carol", "Liam", "Sophia", "Noah", "Amelia"];
const occupations = ["Programmer", "Chef", "Graphic Designer", "Architect", "Musician"];

// initializing index iterator and empty price array for average price function
let i = 0;
const priceArray = [];

// function that renders two initial freelancers
function addInitialFreelancer() {
    for (let j = 0; j < initialFreelancers.length; j++) {
        const initialName = document.createElement("p");
        const initialOccupation = document.createElement("p");
        const initialPrice = document.createElement("p");

        initialName.classList.add("column-item");
        initialOccupation.classList.add("column-item");
        initialPrice.classList.add("column-item");

        initialName.textContent = initialFreelancers[i].name;
        initialOccupation.textContent = initialFreelancers[i].occupation;
        initialPrice.textContent = `$${initialFreelancers[i].price}`;

        nameColumn.appendChild(initialName);
        occupationColumn.appendChild(initialOccupation);
        priceColumn.appendChild(initialPrice);

        priceArray.push(initialFreelancers[i].price);

        i++;
    }
    // function to calculate average price of initial freelancers
    function getAveragePrice() {
        let total = 0;
        for (price of priceArray) {
            total += price;
        }
        const average = total / priceArray.length;
        return average.toFixed(2);
    }
    const newAverage = getAveragePrice();
    averagePrice.innerHTML = `The average starting price is <b>$${newAverage}</b>.`
}

// function that updates elements in html with new freelancers
function addFreelancer() {
    if (freelancers.length > 0) {
        const newName = document.createElement("p");
        const newOccupation = document.createElement("p");
        const newPrice = document.createElement("p");

        // give new elements class for styling purposes
        newName.classList.add("column-item");
        newOccupation.classList.add("column-item");
        newPrice.classList.add("column-item");

        // random number generator
        function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
        }

        // create indexes for arrays
        const nameIndex = getRandomIndex(freelancers);
        const occupationIndex = getRandomIndex(occupations);
        const randomPrice = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

        newName.textContent = freelancers[nameIndex];
        newOccupation.textContent = occupations[occupationIndex];
        newPrice.textContent = `$${randomPrice}`;

        // remove added freelancers and occupations to avoid duplication
        freelancers.splice(nameIndex, 1);
        occupations.splice(occupationIndex, 1);

        nameColumn.appendChild(newName);
        occupationColumn.appendChild(newOccupation);
        priceColumn.appendChild(newPrice);

        priceArray.push(randomPrice);

        // function to calculate average price as freelancers are added
        function getAveragePrice() {
            let total = 0;

            for (price of priceArray) {
                total += price;
            }
            const average =  total / priceArray.length;
            return average.toFixed(2);
        }

        // update html with average price
        const newAverage = getAveragePrice();
        averagePrice.innerHTML = `The average starting price is <b>$${newAverage}</b>.`

        i++;
    } else {
        // if i is equal to the length of the freelancers array, this will end the interval to stop adding freelancers
        clearInterval(interval);
    }
}

// render first two freelancers
addInitialFreelancer();
// 7 second interval between the adding of each freelancer
const interval = setInterval(addFreelancer, 7000);