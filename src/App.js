import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);        
      },
      (err) => {
        console.log(err)
      },
      {
       timeout: 30000, 
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              type="text" 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={ e => setGitHubUserName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              type="text" 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={ e => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latigude">Latitude</label>
              <input 
                type="number" 
                name="latigude" 
                id="latigude" 
                required 
                value={latitude} 
                onChange={ e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={ e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9584880?s=460&u=c5425019c612caf5fe698444bf1c0b68c8d27992&v=4" alt="Adriano"/>
              <div className="user-info">
                <strong>Adriano Santos</strong>
                <span>ReactJS, ReactNative, Node.JS</span>
              </div>
            </header>
            <p>I am entrepreneur and systems analyst, but I consider the Father profession the most inspiring and challenging.</p>
            <a href="https://github.com/adrianodrix">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9584880?s=460&u=c5425019c612caf5fe698444bf1c0b68c8d27992&v=4" alt="Adriano"/>
              <div className="user-info">
                <strong>Adriano Santos</strong>
                <span>ReactJS, ReactNative, Node.JS</span>
              </div>
            </header>
            <p>I am entrepreneur and systems analyst, but I consider the Father profession the most inspiring and challenging.</p>
            <a href="https://github.com/adrianodrix">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9584880?s=460&u=c5425019c612caf5fe698444bf1c0b68c8d27992&v=4" alt="Adriano"/>
              <div className="user-info">
                <strong>Adriano Santos</strong>
                <span>ReactJS, ReactNative, Node.JS</span>
              </div>
            </header>
            <p>I am entrepreneur and systems analyst, but I consider the Father profession the most inspiring and challenging.</p>
            <a href="https://github.com/adrianodrix">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9584880?s=460&u=c5425019c612caf5fe698444bf1c0b68c8d27992&v=4" alt="Adriano"/>
              <div className="user-info">
                <strong>Adriano Santos</strong>
                <span>ReactJS, ReactNative, Node.JS</span>
              </div>
            </header>
            <p>I am entrepreneur and systems analyst, but I consider the Father profession the most inspiring and challenging.</p>
            <a href="https://github.com/adrianodrix">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
