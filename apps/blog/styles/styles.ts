import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 0.2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export const FooterA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Title = styled.h1`
  line-height: 1.15;
  font-size: 4rem;
`;

export const Grid = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
`;

export const Card = styled.h2`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const CardP = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  cursor: pointer;
`;

styled.div`
  @media (max-width: 600px) {
      Grid{
      height: 100%;
      width: 100%;
      flex-direction: column;
      }
    }
`;

export const Forms = styled.form`
  color: blue;
`;
