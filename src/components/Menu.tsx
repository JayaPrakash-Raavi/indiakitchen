import chickenBiryani from "../assets/images/chicken_dum_biryani.jpg";
import paneerButterMasala from "../assets/images/panner_butter_masala.jpg";

const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 10,
    description: "Aromatic rice with flavorful chicken curry.",
    image: chickenBiryani, // Use the imported variable
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 12,
    description: "Rich and creamy paneer curry with Indian spices.",
    image: paneerButterMasala, // Use the imported variable
  },
];



type MenuProps = {

  updateCart: (item: { id: number; name: string; price: number; description: string; image: string; quantity: number }, action: "add" | "remove") => void;

};

const Menu = ({ updateCart }: MenuProps) => {
  return (
    <section className="cards">
      {menuItems.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => updateCart({ ...item, quantity: 1 }, "add")}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default Menu;
