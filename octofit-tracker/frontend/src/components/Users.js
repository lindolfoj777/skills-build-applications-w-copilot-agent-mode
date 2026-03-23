import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        setLoading(false);
        console.log('Fetched users:', results);
        console.log('API endpoint:', apiUrl);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching users:', err);
      });
  }, [apiUrl]);

  if (loading) return <div className="text-center my-4">Carregando usuários...</div>;
  return (
    <div>
      <h2 className="mb-4 text-primary">Usuários</h2>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Usuário</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id || i}>
                  <td>{u.id || i + 1}</td>
                  <td>{u.username || '-'}</td>
                  <td>{u.name || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
