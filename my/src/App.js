import "./App.css";
import NavigationMenu from "./NavigationMenu";
import FeaturedItemsCarousel from "./FeaturedItemsCarousel";

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
    imageUrl: "https://example.com/image1.jpg",
    name: "Model 1",
    description: "Description of Model 1",
  },
  {
    id: 2,
    imageUrl: "https://example.com/image2.jpg",
    name: "Model 2",
    description: "Description of Model 2",
  },
  {
    id: 3,
    imageUrl: "https://example.com/image3.jpg",
    name: "Model 3",
    description: "Description of Model 3",
  },
  // Add more featured items as needed
];

function App() {
  return (
    <div className="App">
      <NavigationMenu items={cars} />
      <section id="featured">
        <h2>Featured Items</h2>
        <FeaturedItemsCarousel items={featuredItems} />
      </section>
      {/* Add more sections for other content if needed */}
    </div>
  );
}

export default App;
