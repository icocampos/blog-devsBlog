import Head from 'next/head';
import Link from 'next/link';
import  React from 'react';
import { Card, CardP, Container, Footer, FooterA, Grid, Main, Title } from '../styles/styles';
import fetchGraphQL from './graphql';



const { useState, useEffect } = React;

function Home() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {let isMounted = true;
    fetchGraphQL(`
      query {
        posts {
          id
          title
          content
          createdAt
        }
      }
    `).then(response => {
      if(!isMounted) {
        return;
      }
      const data = response.data;
      setPosts(data.posts);
    }).catch(error => {
      console.log(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  return (
    <Container>
      <Head>
        <title>devsBlog</title>
      </Head>

      <Main>
        <Title>
          devsBlog
        </Title>
        <FooterA>
          <Grid>
            <Card>ReactJS</Card>
            <CardP>
              {posts != null ? `Repository: ${posts.content}` : 'loading...'}
            </CardP>
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
