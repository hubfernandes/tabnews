import React from "react";

function Index() {
  const styles = `
    :root {
      --primary: #007aff;
      --background: #000000;
      --surface: #1c1c1e;
      --text: #ffffff;
      --text-secondary: #86868b;
      --accent: #2c2c2e;
    }

    .privacy-container {
      font-family: "Outfit", -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.7;
      min-height: 100vh;
    }

    .privacy-main {
      padding: 60px 20px;
      max-width: 850px;
      margin: 0 auto;
    }

    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: var(--accent);
      border-radius: 20px;
      font-size: 12px;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 10px;
      letter-spacing: -1px;
    }

    .last-update {
      color: var(--text-secondary);
      font-size: 14px;
      margin-bottom: 40px;
      display: block;
    }

    h2 {
      font-size: 24px;
      margin-top: 50px;
      margin-bottom: 20px;
      color: var(--text);
      font-weight: 600;
    }

    p, li {
      color: var(--text-secondary);
      font-size: 16px;
    }

    .content-box {
      background: var(--surface);
      padding: 25px;
      border-radius: 12px;
      margin: 20px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 14px;
    }

    th, td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid var(--accent);
    }

    th {
      color: var(--text);
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
    }

    .contact-card {
      border: 1px solid var(--accent);
      padding: 20px;
      border-radius: 12px;
      margin-top: 40px;
      text-align: center;
    }

    .privacy-link {
      color: var(--primary);
      text-decoration: none;
      transition: 0.3s;
    }
    .privacy-link:hover {
      opacity: 0.8;
    }
  `;

  return (
    <div className="privacy-container">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <main className="privacy-main">
        <span className="badge">Conformidade LGPD & GDPR</span>
        <h1>Política de Privacidade</h1>
        <span className="last-update">
          Versão 2.1 — Atualizado em 31 de Janeiro de 2026
        </span>

        <p>
          Bem-vindo ao <strong>Constance</strong>. Esta Política detalha como
          tratamos dados pessoais, garantindo transparência e segurança. Ao
          utilizar nossos serviços, você concorda com a coleta e uso de
          informações conforme aqui descrito.
        </p>

        <div className="content-box">
          <strong>Resumo para o Usuário:</strong>
          <ul>
            <li>
              Você é o <strong>Controlador</strong> dos dados de seus clientes.
            </li>
            <li>
              Nós somos os <strong>Operadores</strong> que fornecem a
              tecnologia.
            </li>
            <li>Não comercializamos seus dados em nenhuma hipótese.</li>
          </ul>
        </div>

        <h2>1. Natureza da Coleta de Dados</h2>
        <p>
          Coletamos dados estritamente necessários para a execução dos nossos
          serviços, divididos em:
        </p>
        <ul>
          <li>
            <strong>Dados de Conta:</strong> Nome, e-mail, UID (Firebase) e
            credenciais de login.
          </li>
          <li>
            <strong>Dados Operacionais:</strong> Inventário, transações, logs de
            vendas e imagens.
          </li>
          <li>
            <strong>Dados de Terceiros:</strong> Nomes e telefones para gestão
            de CRM e WhatsApp.
          </li>
          <li>
            <strong>Metadados Técnicos:</strong> IP, modelo do hardware, e
            identificadores (IDFA/AAID).
          </li>
        </ul>

        <h2>2. Bases Legais para Tratamento</h2>
        <p>
          Em conformidade com a LGPD, tratamos seus dados sob as seguintes
          bases:
        </p>
        <ul>
          <li>
            <strong>Execução de Contrato:</strong> Fornecer as funcionalidades
            contratadas.
          </li>
          <li>
            <strong>Legítimo Interesse:</strong> Melhoria do produto e
            segurança.
          </li>
          <li>
            <strong>Consentimento:</strong> Marketing e cookies analíticos.
          </li>
        </ul>

        <h2>3. Compartilhamento e Subprocessadores</h2>
        <table>
          <thead>
            <tr>
              <th>Parceiro</th>
              <th>Função</th>
              <th>Localização</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Google Cloud / Firebase</strong>
              </td>
              <td>Hospedagem e Banco de Dados</td>
              <td>EUA / Global</td>
            </tr>
            <tr>
              <td>
                <strong>RevenueCat</strong>
              </td>
              <td>Processamento de Assinaturas</td>
              <td>EUA</td>
            </tr>
            <tr>
              <td>
                <strong>Google AdMob</strong>
              </td>
              <td>Rede de Publicidade</td>
              <td>Global</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Segurança</h2>
        <p>
          Implementamos criptografia de ponta (SSL/TLS). Devido à natureza da
          nuvem, seus dados podem ser armazenados fora do país, mantendo padrões
          equivalentes à LGPD.
        </p>

        <div className="contact-card">
          <h2>Dúvidas ou Requisições?</h2>
          <p>Entre em contato com nosso DPO:</p>
          <p>
            <strong>E-mail: </strong>
            <a href="mailto:lucernos.labs@gmail.com" className="privacy-link">
              lucernos.labs@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Index;
