import chickenBiryani from "../assets/images/chicken_dum_biryani.jpg";
import paneerButterMasala from "../assets/images/panner_butter_masala.jpg";

const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic rice with flavorful chicken curry.",
    image: chickenBiryani, // Use the imported variable
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Rich and creamy paneer curry with Indian spices.",
    image: paneerButterMasala, // Use the imported variable
  },
];

const Menu = () => {
  return (
    <section className="cards">
      {menuItems.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Menu;
