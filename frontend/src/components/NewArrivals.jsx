function NewArrivals() {
    const products = [
      { id: 1, name: "T-shirt", price: "$20", image: "/Frame 32.png " },
      { id: 2, name: "Jeans", price: "$30", image: "/jeans.jpg" },
    ];
  
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded">
              <img src={product.image} alt={product.name} className="w-full" />
              <h3 className="mt-2 font-bold">{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default NewArrivals;
  