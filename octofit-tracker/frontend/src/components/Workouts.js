import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        setLoading(false);
        console.log('Fetched workouts:', results);
        console.log('API endpoint:', apiUrl);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching workouts:', err);
      });
  }, [apiUrl]);

  if (loading) return <div className="text-center my-4">Carregando treinos...</div>;
  return (
    <div>
      <h2 className="mb-4 text-primary">Treinos</h2>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((w, i) => (
                <tr key={w.id || i}>
                  <td>{w.id || i + 1}</td>
                  <td>{w.name || '-'}</td>
                  <td><button className="btn btn-outline-primary btn-sm">Ver</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
