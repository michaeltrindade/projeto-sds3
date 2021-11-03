import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      {/**abaixo importando um componente para dentro de outro componente, 
     * que depois será renderizado no index.jsx 
     * lembrando que no retorno da função no react, só pode ter 1 elemento, 
     * para delimitar como 1 elemento só, usa-se o fragment <> </>
    */}
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
