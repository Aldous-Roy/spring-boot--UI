import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import NewUser from './Pages/NewUser';
import Users from './Pages/Users';
import SearchUser from './Pages/SearchUser';
// import Users from './pages/Users';
// import EditUser from './pages/EditUser';
// import SearchUser from './pages/SearchUser';

import './App.css';

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/new-user">New User</Link>
        <Link to="/users">Users</Link>
        <Link to="/search-user">Search User</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/edit-user/:id" element={<EditUser />} /> */}
        <Route path="/search-user" element={<SearchUser />} />
      </Routes>
    </Router>
  );
}

export default App;