import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
// import { CreatePost } from "./pages/create-post/create-post";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register displayName="" email="" password="" imageFile={null}  />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>

  );
}

export default App;
