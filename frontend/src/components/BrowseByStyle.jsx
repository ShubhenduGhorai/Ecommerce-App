function BrowseByStyle() {
    return (
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Browse by Dress Style</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
          <div className="p-4 bg-white border rounded">Casual</div>
          <div className="p-4 bg-white border rounded">Formal</div>
          <div className="p-4 bg-white border rounded">Party</div>
          <div className="p-4 bg-white border rounded">Gym</div>
        </div>
      </section>
    );
  }
  
  export default BrowseByStyle;
  