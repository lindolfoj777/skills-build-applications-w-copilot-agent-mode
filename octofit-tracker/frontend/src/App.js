
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
        <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src="/octofitapp-small.png" alt="OctoFit Logo" className="octofit-logo" />
          OctoFit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/activities">Atividades</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/teams">Equipes</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Usuários</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/workouts">Treinos</NavLink></li>

          function App() {
            return (
              <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
                  <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
                    <img src="/octofitapp-small.png" alt="OctoFit Logo" className="octofit-logo" />
                    OctoFit Tracker
                  </NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><NavLink className="nav-link" to="/activities">Atividades</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/teams">Equipes</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/users">Usuários</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/workouts">Treinos</NavLink></li>
                    </ul>
                  </div>
                </nav>
                <Routes>
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/workouts" element={<Workouts />} />
                  <Route path="/" element={
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '60vh'}}>
                      <div className="card shadow p-4 text-center" style={{maxWidth: 500}}>
                        <h1 className="display-5 mb-3">Bem-vindo ao <span className="text-primary">OctoFit Tracker</span>!</h1>
                        <p className="lead">Gerencie atividades, equipes, treinos e acompanhe o leaderboard de forma moderna e intuitiva.</p>
                        <NavLink to="/activities" className="btn btn-primary btn-lg mt-3">Ver Atividades</NavLink>
                      </div>
                    </div>
                  } />
                </Routes>
              </div>
            );
          }
