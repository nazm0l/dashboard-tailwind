const TopBar = () => {
  return (
    <div>
      <div className="h-24 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-medium">Invoice List</h2>
          <p>Dashboard . Invoices</p>
        </div>
        <button className="btn btn-primary">+ New Invoice</button>
      </div>
    </div>
  );
};

export default TopBar;
