import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: #333;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #222;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  border-bottom: 2px solid rgb(132, 38, 139, 0.6);
  // box-shadow: 1px 1px 1px 2px red;
  gap: 5px;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  @media (max-width: 760px) {
    font-size: 13px;
  }
`;

export const TitleProject = styled.strong``;

export const Url = styled.span``;

export const Created_at = styled.span``;
