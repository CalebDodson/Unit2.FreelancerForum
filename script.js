// fetching elements from html
const nameColumn = document.getElementById("name-column");
const occupationColumn = document.getElementById("occupation-column");
const priceColumn = document.getElementById("price-column");
const averagePrice = document.getElementById("subheader");

// array of freelancers filled with objects containing name, occupation, and price
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    },
    {
        name: "Carol",
        occupation: "Programmer",
        price: 70
    },
    {
        name: "Liam",
        occupation: "Chef",
        price: 90
    },
    {
        name: "Sophia",
        occupation: "Graphic Designer",
        price: 40
    },
    {
        name: "Noah",
        occupation: "Architect",
        price: 20
    },
    {
        name: "Amelia",
        occupation: "Musician",
        price: 60
    }
]

// initializing index iterator and empty price array for average price function
let i = 0;
const priceArray = [];

// function that updates elements in html with new freelancers
function addFreelancer() {
    if (i < freelancers.length) {
        const newName = document.createElement("p");
        const newOccupation = document.createElement("p");
        const newPrice = document.createElement("p");

        // give new elements class for styling purposes
        newName.classList.add("column-item");
        newOccupation.classList.add("column-item");
        newPrice.classList.add("column-item");

        newName.textContent = freelancers[i].name;
        newOccupation.textContent = freelancers[i].occupation;
        newPrice.textContent = `$${freelancers[i].price}`;

        nameColumn.appendChild(newName);
        occupationColumn.appendChild(newOccupation);
        priceColumn.appendChild(newPrice);

        priceArray.push(freelancers[i].price);

        // function to calculate average price as freelancers are added
        function getAveragePrice() {
            let total = 0;

            for (price of priceArray) {
                total += price;
            }
            const average =  total / priceArray.length;
            return +average.toFixed(2);
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

// 7 second interval between the adding of each freelancer
const interval = setInterval(addFreelancer, 7000);