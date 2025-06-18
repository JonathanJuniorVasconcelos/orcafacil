import { useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function App() {
  const [client, setClient] = useState('');
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');

  const generatePDF = () => {
    const content = `
      <div style='font-family: sans-serif;'>
        <h2 style='color:#0066cc;'>Orçamento</h2>
        <p><strong>Cliente:</strong> ${client}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Valor:</strong> R$ ${price}</p>
        <p><em>Gerado por OrçaFácil</em></p>
      </div>
    `;
    html2pdf().from(content).save(`orcamento-${client}.pdf`);
  };

  return (
    <div style={{ maxWidth: 500, margin: '3rem auto', padding: '2rem', border: '1px solid #ccc' }}>
      <h1>Gerar Orçamento</h1>
      <input placeholder="Nome do cliente" value={client} onChange={(e) => setClient(e.target.value)} /><br /><br />
      <input placeholder="Serviço" value={service} onChange={(e) => setService(e.target.value)} /><br /><br />
      <input placeholder="Valor" value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
      <button onClick={generatePDF}>Gerar PDF</button>
    </div>
  );
}