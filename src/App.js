import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashoard/Dashoard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { Entry } from "./pages/entry/Entry.page";

function App() {
  return (
    <div className="App">
      {/*<Entry/>*/}
      <DefaultLayout>
        {/*<Dashboard />*/}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
