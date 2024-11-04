import AppRouter from "./routes/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import {useContext, useEffect} from "react";
import {jwtDecode} from "jwt-decode";
import {Context} from "./main.jsx";

function App() {
  const {userStore} = useContext(Context);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      try {
        userStore.setUser(jwtDecode(token));
        userStore.setIsAuth(true);
        userStore.setIsAdmin(userStore.user.roles.includes('ROLE_ADMIN'))
      } catch (e) {
        alert(e)
      }
    }
  }, [userStore, token])

  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
