import styled from 'styled-components';

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  margin: 0;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`;

export const Code = styled.div`
  background: #fafafa;
  border-radius: 5px;
  font-family: var(--font-code);
  font-size: 1.1rem;
  padding: 0.75rem;
`;

export const Grid = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  max-width: 800px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

export const Card = styled.a`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  color: inherit;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;

  &:hover,
  &:focus,
  &:active {
    border-color: #0070f3;
    color: #0070f3;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid #eaeaea;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100%;

  a {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`;
