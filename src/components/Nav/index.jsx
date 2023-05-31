import { Link } from "react-router-dom";
import { StyledNav } from "./style";

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
        </StyledNav>
    )
}

export default Nav;