import { FormProvider } from "./contexts/FormContext";
import { Router } from "./router";

import "./App.css";

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
