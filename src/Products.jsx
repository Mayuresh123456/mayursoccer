import Footer from "./Footer";
import Navbar from "./Navbar";
import productsmain from "./productsmain";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  

  const [searchParam, setSearchParam] = useSearchParams();
  const searchText = searchParam.get("q") || "";

  const filteredProducts = productsmain.filter((item) =>
  (item.title || item.name)
    .toLowerCase()
    .includes(searchText.toLowerCase())
  );


  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParam(value ? { q: value } : {});
  };

  return (
    <>
      <Navbar />

      
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchText}
          onChange={handleSearch}
          style={{
            padding: "8px",
            width: "250px",
            fontSize: "16px"
          }}
        />
      </div>

    
      <div className="allproducts">
        {filteredProducts.length === 0 && (
          <h3 style={{ textAlign: "center" }}>No products found</h3>
        )}

        {filteredProducts.map((item) => (
          <div key={item.id}>
            <img
              className="imageproducts"
              src={item.image}
              alt={item.title}
            />
            <h4>{item.title}</h4>
            <p>
              <strong>₹{item.price}</strong>{" "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{item.originalPrice}
              </span>
            </p>

            <Link to={`/productss/${item.id}`}>
              <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Products;
