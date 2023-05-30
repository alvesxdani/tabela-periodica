import { styled } from "styled-components";
import { Caption } from "./style";


const CaptionBox = styled.div`
display: grid;
grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
gap: 2rem;
padding: 1rem 1rem 1rem 6rem;
height: auto;
`

const TableCaption = () => {
    return (
        <CaptionBox>
            <Caption color='nao_metais' key='nao_metais'>Não metais</Caption>
            <Caption color='metais_alcalinos' key='metais_alcalinos'>Metais alcalinos</Caption>
            <Caption color='semimetais' key='semimetais'>Semimetais</Caption>
            <Caption color='outros_metais' key='outros_metais'>Outros metais</Caption>
            <Caption color='lantanideos' key='lantanideos'>Lantanídeos</Caption>
            <Caption color='gases_nobres' key='gases_nobres'>Gases Nobres</Caption>
            <Caption color='metais_alcalinosT' key='metais_alcalinosT'>Metais alcalino-terrosos</Caption>
            <Caption color='halogenios' key='halogenios'>Halogênios</Caption>
            <Caption color='metais_transicao' key='metais_transicao'>Metais de transição</Caption>
            <Caption color='actinidios' key='actinidios'>Actinídeos</Caption>
        </CaptionBox>
    )
}

export default TableCaption;