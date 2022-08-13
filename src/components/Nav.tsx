import styled from "styled-components";
import Icon from "components/Icon";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  background:#ffffff;
  >ul{
    display:flex;
    >li{
      width:33.3333%;
      text-align:center;
      >a{
        display:flex;
        padding:8px 0;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        >icon{
        width:40px;
        height:40px
        }
        &.selected{
          color:red;
          .icon{
            fill:red;
          }
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name={"money"} />
            记账
          </NavLink>
        </li>
        <li >
          <NavLink to="/tags" activeClassName="selected">
            <Icon name={"tags"} />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name={"statistics"} />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper >
  )
}

export default Nav;