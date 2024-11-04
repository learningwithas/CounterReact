import StoreContextProvider from "./Store/StoreContextProvider";
import Counter from "./components/Counter";

const App = () => {
  return (
    <StoreContextProvider>
      <Counter />
    </StoreContextProvider>
  );
};

export default App;
