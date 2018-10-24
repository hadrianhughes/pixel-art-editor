import styled from 'styled-components';

import { color } from '../../styles/tools';

export const Wrapper = styled.div`
  background-color: ${color('grey')};
  height: 100%;
  position: fixed;
  width: 100%;
`;

export const Canvas = styled.canvas`
  background-color: white;
  height: 64px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(7);
  width: 64px;
`;
