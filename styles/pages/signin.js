import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: auto;
`;

export const SocialMediaIconContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 2.5rem;
  }
  a {
    text-decoration: none;
    color: #000;
    margin-left: 2rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;
