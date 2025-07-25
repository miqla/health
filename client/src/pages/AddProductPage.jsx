export default function AddProductPage() {
  return (
    <div className="card card-dash bg-base-200 mx-auto w-96">
      <div className="card-body">
        <h2 className="card-title mx-auto">Add Data</h2>
        <form className="flex flex-col gap-2">
          <label htmlFor="name">Product name</label>
          <input className="border rounded-sm p-1" type="text" id="name" />
          <label htmlFor="image">Image url</label>
          <input className="border rounded-sm p-1" type="text" id="image" />
          <label htmlFor="price">Price</label>
          <input className="border rounded-sm p-1" type="number" id="price" />
          <button className="btn justify-end max-w-max self-end">Submit</button>
        </form>
      </div>
    </div>
  );
}
