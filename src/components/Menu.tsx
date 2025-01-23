import menuItems1 from "../assets/menu/menu"; // Adjust the path to your menu file
import "./menu.css";

type MenuProps = {
  updateCart: (
    item: {
      id: number;
      name: string;
      price: number;
      description: string;
      image: string;
      quantity: number;
    },
    action: "add" | "remove"
  ) => void;
};

const Menu = ({ updateCart }: MenuProps) => {
  return (
    <div className="menu-container">
      {menuItems1.map((category) => (
        <div key={category.category} className="menu-category">
          <h2>{category.category}</h2>
          <div className="cards">
            {category.items.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button
                  onClick={() =>
                    updateCart(
                      { ...item, quantity: 1 },
                      "add"
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
