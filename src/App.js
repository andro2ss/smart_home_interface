import { useEffect, useState } from "react";
import loadDevices from "./functions/loadDevices";
import SimpleAccordion from "./components/simpleAccordion/SimpleAccordion";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import FixedBottomNavigation from "./components/FixedBottomNavigation";

function App() {
  const [devices, setDevices] = useState([]);
  const [serverRequestStatus, setServerRequestStatus] = useState("init");

  useEffect(() => {
    console.log(serverRequestStatus);
    loadDevices(setDevices, setServerRequestStatus);
    console.log(devices);
  }, [serverRequestStatus]);

  return (
    <div className="App">
      <ResponsiveAppBar />
      {devices.length >= 1 ? (
        <SimpleAccordion
          devices={devices}
          setServerRequestStatus={setServerRequestStatus}
        />
      ) : (
        "You dont have devices"
      )}
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
