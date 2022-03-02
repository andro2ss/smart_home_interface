import { useEffect, useState } from "react";
import loadDevices from "./functions/loadDevices";
import SimpleAccordion from "./components/simpleAccordion/SimpleAccordion";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import ModalDetails from "./components/modal/ModalDetails";
import serverChangesSymulation from "./functions/serverChangesSymulation";
import { useDispatch, useSelector } from "react-redux";
import deviceFromArray from "./functions/deviceFromArray";
import { setDeviceDetails } from "./actions";
import OutlinedButtons from "./components/common/buttons/OutlinedButtons";
import addDevice from "./functions/addDevice";

function App() {
  const [devices, setDevices] = useState([]);
  const [serverRequestStatus, setServerRequestStatus] = useState("init");
  const [intervalInit, setIntervalInit] = useState("init");

  const dispatch = useDispatch();
  const deviceId = useSelector((state) => state.deviceDetailsId);

  if (intervalInit === "init") {
    setIntervalInit("initialized");
    setInterval(function () {
      setServerRequestStatus("updateData");
    }, 5000);
  }

  useEffect(() => {
    if (serverRequestStatus !== "loaded") {
      if (serverRequestStatus !== "loading") {
        setServerRequestStatus("loading");
        loadDevices(setDevices, setServerRequestStatus);
        serverChangesSymulation(devices);
      }
    }
    if (deviceId !== 0) {
      dispatch(setDeviceDetails(deviceFromArray(devices, deviceId)[0]));
    }
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
        <span id="emptyListMessage">You dont have any devices</span>
      )}
      <div className="btn__box">
        <OutlinedButtons
          text={"add Bulb"}
          onClick={() => {
            addDevice("bulb", setServerRequestStatus);
          }}
        />
        <OutlinedButtons
          text={"add Outlet"}
          onClick={() => {
            addDevice("outlet", setServerRequestStatus);
          }}
        />
        <OutlinedButtons
          text={"add Temperature Sensor"}
          onClick={() => {
            addDevice("temperatureSensor", setServerRequestStatus);
          }}
        />
      </div>
      <ModalDetails />
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
