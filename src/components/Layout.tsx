import styled from "styled-components";
import Nav from "components/Nav"


const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`;

const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )

}

export default Layout;
// 页面的整体布局