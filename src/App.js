import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = parseFloat(altura) / 100;
      const imc = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setResultado(imc);
    }
  };

  const getClassificacao = () => {
    if (!resultado) return '';

    if (resultado < 18.5) {
      return 'Abaixo do peso';
    } else if (resultado < 24.9) {
      return 'Peso normal';
    } else if (resultado < 29.9) {
      return 'Sobrepeso';
    } else if (resultado < 34.9) {
      return 'Obesidade Grau I';
    } else if (resultado < 39.9) {
      return 'Obesidade Grau II';
    } else {
      return 'Obesidade Grau III';
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Calculadora de IMC</h1>
      <div className="mb-3">
        <label className="form-label">Altura (cm):</label>
        <input
          type="number"
          className="form-control"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Peso (kg):</label>
        <input
          type="number"
          className="form-control"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calcularIMC}>
        Calcular IMC
      </button>
      {resultado !== null && (
        <div className="mt-4">
          <h4>Resultado:</h4>
          <p>Seu IMC é: {resultado}</p>
          <p>Classificação: {getClassificacao()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
