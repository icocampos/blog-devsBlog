import Head from 'next/head';
import Link from 'next/link';
import { Card, CardP, Container, Footer, FooterA, Grid, Main, Title } from '../styles/styles';


function Home() {
  return (
    <Container>
      <Head>
        <title>devsBlog</title>
      </Head>

      <Main>
        <Title>
          devsBlog
        </Title>

        { }
        <FooterA>
          <Grid>
            <Card>ReactJS</Card>
            <CardP>Saiba tudo sobre a lib javascript mais usada no mundo</CardP>
          </Grid>

          <Grid>
            <Card>NodeJS</Card>
            <CardP>Por quê o javascript está em todos os lugares? Descubra aqui.</CardP>
          </Grid>

          <Grid>
            <Card>Context API ou Redux?</Card>
            <CardP>Minha opinião final, sem ficar em cima do muro</CardP>
          </Grid>

          <Grid>
            <Card>Seu artigo no nosso blog &rarr;</Card>
            <Link href="/form" >
            <CardP>
              Clique para enviar seu conteúdo e que sabe aparecer em nosso blog?
            </CardP>
            </Link>
          </Grid>
        </FooterA>
      </Main>

      <Footer>
        Powered by Ícaro Campos
      </Footer>
    </Container>
  );
}

export default Home;
