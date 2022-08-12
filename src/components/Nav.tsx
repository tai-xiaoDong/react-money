
import styled from "styled-components";
import { Link } from "react-router-dom";
require('iconfont/money.svg');
require('iconfont/tags.svg');
require('iconfont/statistics.svg');



const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    >li{
      width:33.3333%;
      text-align:center;
      padding:8px 0;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      >icon{
        width:40px;
        height:40px
      }
    }
  }
`;

function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li >
                    <svg className="icon" >
                        <use xlinkHref="#tags" />
                    </svg>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <svg className="icon" >
                        <use xlinkHref="#money" />
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className="icon" >
                        <use xlinkHref="#statistics" />
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper >
    )
}

export default Nav;