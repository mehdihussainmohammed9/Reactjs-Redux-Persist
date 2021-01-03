import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Form from "./Components/Form.js";
// import IceCreamContainer from "./components/IceCreamContainer";
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Form />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
