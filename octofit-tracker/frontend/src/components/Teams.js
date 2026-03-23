import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        setLoading(false);
        console.log('Fetched teams:', results);
        console.log('API endpoint:', apiUrl);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching teams:', err);
      });
  }, [apiUrl]);

  if (loading) return <div className="text-center my-4">Carregando equipes...</div>;
  return (
    <div>
      <h2 className="mb-4 text-primary">Equipes</h2>
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
              {teams.map((t, i) => (
                <tr key={t.id || i}>
                  <td>{t.id || i + 1}</td>
                  <td>{t.name || '-'}</td>
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

export default Teams;
