import { Caption } from "./style";

const StyledCaption = ({ color, name }) => {
    return(
        <Caption color={color}>{name}</Caption>
    )
}

export default StyledCaption;