import DataTable from "./components/DataTable";
import Statistics from "./components/Statistics";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="container mx-auto">
      <TopBar />
      <Statistics />
      <DataTable />
    </div>
  );
}

export default App;
