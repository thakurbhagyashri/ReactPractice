import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li> cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = {
  restaurants: [
    {
      id: "1",
      name: "Spicy Delights",
      address: "123 Flavor Street, Food City",
      rating: 4.5,
      cuisine: "Indian",
      deliveryTime: "30-40 mins",
      priceForTwo: 500,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "2",
      name: "Pizza Haven",
      address: "456 Pizza Lane, Food City",
      rating: 4.8,
      cuisine: "Italian",
      deliveryTime: "20-30 mins",
      priceForTwo: 600,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "3",
      name: "Burger Bliss",
      address: "789 Burger Avenue, Food City",
      rating: 4.2,
      cuisine: "American",
      deliveryTime: "25-35 mins",
      priceForTwo: 450,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "4",
      name: "Sushi Supreme",
      address: "101 Sushi Road, Food City",
      rating: 4.7,
      cuisine: "Japanese",
      deliveryTime: "30-40 mins",
      priceForTwo: 700,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "5",
      name: "Taco Town",
      address: "202 Taco Street, Food City",
      rating: 4.4,
      cuisine: "Mexican",
      deliveryTime: "20-30 mins",
      priceForTwo: 550,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "6",
      name: "Pasta Paradise",
      address: "303 Pasta Plaza, Food City",
      rating: 4.6,
      cuisine: "Italian",
      deliveryTime: "30-40 mins",
      priceForTwo: 650,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "7",
      name: "Chinese Corner",
      address: "404 Wok Way, Food City",
      rating: 4.3,
      cuisine: "Chinese",
      deliveryTime: "25-35 mins",
      priceForTwo: 600,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "8",
      name: "Vegan Village",
      address: "505 Green Lane, Food City",
      rating: 4.5,
      cuisine: "Vegan",
      deliveryTime: "20-30 mins",
      priceForTwo: 500,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "9",
      name: "BBQ Bonanza",
      address: "606 Grill Street, Food City",
      rating: 4.9,
      cuisine: "BBQ",
      deliveryTime: "30-40 mins",
      priceForTwo: 750,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "10",
      name: "Deli Delights",
      address: "707 Deli Drive, Food City",
      rating: 4.1,
      cuisine: "Delicatessen",
      deliveryTime: "25-35 mins",
      priceForTwo: 400,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "11",
      name: "Cafe Cool",
      address: "808 Coffee Lane, Food City",
      rating: 4.0,
      cuisine: "Cafe",
      deliveryTime: "15-25 mins",
      priceForTwo: 300,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "12",
      name: "Thai Treat",
      address: "909 Thai Road, Food City",
      rating: 4.6,
      cuisine: "Thai",
      deliveryTime: "30-40 mins",
      priceForTwo: 650,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "13",
      name: "Seafood Shack",
      address: "1010 Ocean Drive, Food City",
      rating: 4.7,
      cuisine: "Seafood",
      deliveryTime: "35-45 mins",
      priceForTwo: 800,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "14",
      name: "Sandwich Spot",
      address: "1111 Sandwich Street, Food City",
      rating: 4.4,
      cuisine: "Sandwiches",
      deliveryTime: "20-30 mins",
      priceForTwo: 450,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
    {
      id: "15",
      name: "Dessert Den",
      address: "1212 Sweet Avenue, Food City",
      rating: 4.8,
      cuisine: "Desserts",
      deliveryTime: "15-25 mins",
      priceForTwo: 350,
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    },
  ],
};

const RestroCard = ({ restaurants }) => {
    
  //   console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={restaurants.image} />
      <h3>{restaurants.name}</h3>
      <h4>{restaurants.address}</h4>
      <h4>Rs {restaurants.priceForTwo}</h4>
    </div>
  );
};

const Body = () => {
  const { restaurants } = resList;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurants) => (
          <RestroCard key={restaurants.id} restaurants={restaurants} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
