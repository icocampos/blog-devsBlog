import Head from 'next/head';
import Link from 'next/link'
import './styles.css';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>devsBlog</title>
      </Head>

      <main className="main">
        <h1 className="title">
          devsBlog
        </h1>

        <div className="grid">
          <a className="card">
            <h2>ReactJS</h2>
            <p>Saiba tudo sobre a lib javascript mais usada no mundo</p>
          </a>

          <a className="card">
            <h2>NodeJS</h2>
            <p>Por quê o javascript está em todos os lugares? Descubra aqui.</p>
          </a>

          <a className="card">
            <h2>Context API ou Redux?</h2>
            <p>Minha opinião final, sem ficar em cima do muro</p>
          </a>

          <a className="card">
            <h2>Seu artigo no nosso blog &rarr;</h2>
            <Link href="/form" >
            <p>
              Clique para enviar seu conteúdo e que sabe aparecer em nosso blog?
            </p>
            </Link>
          </a>
        </div>
      </main>

      <footer className="footer">
        Powered by Ícaro Campos
      </footer>
    </div>
  );
}

export default Home;
