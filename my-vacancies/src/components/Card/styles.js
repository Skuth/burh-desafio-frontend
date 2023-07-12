import styled from "styled-components"
import { Link } from "react-router-dom"

export const CardStyles = styled.li`
    width: 95%;
    height: 280px;
    margin: 10px auto;

    border: 1px solid var(--color-blue);

    .vacancie-card__url {
        margin: 10px;
    }
    
    span {
        display: flex;
    }

    @media (min-width: 800px) {
        max-width: 800px;
        margin: 20px;
    }
`

export const LinkStyles = styled(Link)`
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-blue);
`
