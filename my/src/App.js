import "./App.css";
import FeaturedItemsCarousel from "./FeaturedItemsCarousel";
import NavigationMenu from "./NavigationMenu";

const cars = [
  { id: 1, name: "Model A" },
  { id: 2, name: "Model B" },
  { id: 3, name: "Model C" },
  { id: 4, name: "Model D" },
  { id: 5, name: "Model E" },
  { id: 6, name: "Model F" },
  { id: 7, name: "Model G" },
  { id: 8, name: "Model H" }, // Add more cars to complete the list
  { id: 9, name: "Model I" },
  { id: 10, name: "Model J" },
];

const featuredItems = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    name: "Model 1",
    description:
      "The all-electric Model X offers a blend of performance and functionality with falcon-wing doors and ample cargo space.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    name: "Model 2",
    description:
      "The Model Y combines SUV versatility with performance, offering ample seating and cargo space for adventures.",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    name: "Model 3",
    description:
      "The Model 3 is a sleek and efficient sedan, offering an exhilarating driving experience and long range.",
  },
  {
    id: 4,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/01-lightning-lap-2022-101-16440-1671052979.jpeg?resize=2048:*",
    name: "Model 4",
    description:
      "Model 4 is a racing photo showcasing several luxurious cars in a race",
  },
  // ... add more featured cars here
];

function App() {
  return (
    <div className="App">
      <FeaturedItemsCarousel items={featuredItems} />
      <NavigationMenu items={cars} />
      {/* Below this, add content sections for each car with IDs matching the menu */}
      <section id="1">
        <h2>Avtaar</h2> SDE assignment
      </section>
      {/* ... Repeat for other car sections ... */}
    </div>
  );
}

export default App;
