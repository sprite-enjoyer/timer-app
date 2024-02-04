import AuthStoreProvider from "./AuthStoreProvider";
import RouteManager from "./common/RouteManager/RouteManager";

const App = () => {
  return (
    <AuthStoreProvider>
      <RouteManager />
    </AuthStoreProvider>
  );
};

export default App;
