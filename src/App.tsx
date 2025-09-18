import Tux from "./components/tuxLoad";
import { useLoading } from "./hooks/useLoading"; 
import Landing from "./components/landing";

function App() {
  const loaded = useLoading(4000); 

  return (
    <div className="flex justify-center items-center h-screen">
      {!loaded ? <Tux /> :<Landing />}
    </div>
  );
}

export default App;
