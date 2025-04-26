const properties = [
    {
      id: 1,
      location: "Melkbosstrand, Cape Town",
      price: 2200000,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqm: 140,
      description: "Charming seaside house with walking distance to the beach.",
      propertyType: "House"
    },
    {
      id: 2,
      location: "Table View, Cape Town",
      price: 1800000,
      bedrooms: 2,
      bathrooms: 1,
      sizeSqm: 100,
      description: "Modern apartment with ocean views and secure parking.",
      propertyType: "Apartment"
    },
    {
      id: 3,
      location: "West Beach, Cape Town",
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      sizeSqm: 190,
      description: "Spacious family home with a garden and entertainment area.",
      propertyType: "House"
    },
    {
      id: 4,
      location: "Parklands, Cape Town",
      price: 1600000,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqm: 130,
      description: "Townhouse in a quiet neighborhood, close to shops and schools.",
      propertyType: "Townhouse"
    },
    {
      id: 5,
      location: "Milnerton, Cape Town",
      price: 2700000,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqm: 150,
      description: "Stylish home near Lagoon Beach with modern finishes.",
      propertyType: "House"
    },
    {
      id: 6,
      location: "Camps Bay, Cape Town",
      price: 5800000,
      bedrooms: 5,
      bathrooms: 4,
      sizeSqm: 300,
      description: "Luxury villa with a pool and stunning mountain and sea views.",
      propertyType: "Villa"
    },
    {
      id: 7,
      location: "Melkbosstrand, Cape Town",
      price: 2250000,
      bedrooms: 4,
      bathrooms: 3,
      sizeSqm: 150,
      description: "Charming beach house with deck on beach.",
      propertyType: "House"
    },
    {
      id: 8,
      location: "West Beach, Cape Town",
      price: 4200000,
      bedrooms: 5,
      bathrooms: 4,
      sizeSqm: 240,
      description: "Charming house with beautiful view of the mountain.",
      propertyType: "Villa"
    }
  ];

  console.log(properties)

//import display element
const display = document.getElementById('display')

//Render Properties
function renderProperties() {
    display.innerHTML = '';

    properties.forEach(property => {
    
    
    const propertyCard = `
    <div class="propertyCard" onclick="viewProperty(${property.id})">
    <p><strong>description:</strong> ${property.description}</p>
    <p><strong>Location:</strong> ${property.location}</p>
    <p><strong>Price:</strong> ${property.price}</p>
    </div>
    `;


    display.innerHTML += propertyCard

    });
}

renderProperties();

//View individual Cards

function viewProperty(propertyId) {

  const property = properties.find(p => p.id === propertyId);

  if (property) {
    // console.log("Property found:", property.location);
    display.innerHTML = '';

    const propertyDetails = `
    
    <div class="propertyCard">
    <p><strong>Location:</strong> ${property.location}</p>
    <p><strong>Price:</strong> ${property.price}</p>
    <p><strong>bedrooms:</strong> ${property.bedrooms}</p>
    <p><strong>bathrooms:</strong> ${property.bathrooms}</p>
    <p><strong>sizeSqm:</strong> ${property.sizeSqm}</p>
    <p><strong>description:</strong> ${property.description}</p>
    <p><strong>propertyType:</strong> ${property.propertyType}</p>
    </div>
    
    `
    display.innerHTML += propertyDetails;


  } else {
    console.log("Property not found");
  }
}

//Search Bar
//inport search element
const searchBar = document.getElementById('search');

function search() {

    const searchValue = searchBar.value.trim();
    display.innerHTML = '';
    
    for(let i = 0;i < properties.length; i++){

    const property = properties[i];

        if(property.location.toLowerCase().includes(searchValue)){
            
            const searchOutPut = `
            
            <div onclick="viewProperty(${property.id})">
            <p><strong>Location:</strong> ${property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>
            </div>
            
            
            `
        display.innerHTML += searchOutPut;
            
        }
    }
}

const button = document.getElementById('submit');

button.addEventListener('click', () => {
    search();
});


//filter by locations
const locations = document.getElementById('Location');



locations.addEventListener('change', () => {
  const locationValue = locations.value.trim();

  properties.forEach(property => {

    // if(locationValue.toLowerCase().includes(property.location.toLocaleLowerCase())){
    //   console.log("selected Value:", property.id)
    // }

    if(property.location.toLocaleLowerCase().includes(locationValue.toLocaleLowerCase())){
      // console.log("selected Value:", property.id) 
      display.innerHTML = '';
      const displayLocation = `
      
       <div onclick="viewProperty(${property.id})">
            <p><strong>Location:</strong> ${property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>
            </div>
      
      ` 
      display.innerHTML += displayLocation;

    }
  })
  
})