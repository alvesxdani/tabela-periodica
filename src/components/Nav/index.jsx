import { Link } from "react-router-dom";
import { StyledNav } from "./style";

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/">HOME</Link>
            <Link to="/quiz">QUIZ</Link>
        </StyledNav>
    )
}

export default Nav;