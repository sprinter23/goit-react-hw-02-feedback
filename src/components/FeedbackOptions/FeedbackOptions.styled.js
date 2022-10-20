import styled from 'styled-components';

export const FeedbackButton = styled.button`
  margin:  0 15px 0 15px;
  min-width: 100px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: #2e7ebd 0 1px 2px;
  text-decoration: none;
  text-align: center;
  line-height: 1.1;
  white-space: pre-line;
  padding: 0.7em 0;
  border: 1px solid;
  border-color: #60a3d8 #2970a9 #2970a9 #60a3d8;
  border-radius: 6px;
  outline: none;
  background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
  box-shadow: inset rgba(255, 255, 255, 0.5) 1px 1px;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.1;
    color: rgb(255, 255, 255);
    background-image: linear-gradient(#9dc7e7, #74afdd 50%, #378bce);
  }
  &:active {
    border-color: #2a2a2a;
  }
`;
