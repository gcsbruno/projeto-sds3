import DataTable from "components/dataTable";
import NavBar from "components/navbar/index";
import Footer from "components/footer/index";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Olá Mundo</h1>
          <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
