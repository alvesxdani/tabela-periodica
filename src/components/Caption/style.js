import { styled } from "styled-components";

export const Caption = styled.div`
// CSS HEX
/* nao_metais */ --lapis-lazuli: #005387ff;
/* metais_alcalinos */ --english-violet: #62415dff;
/* metais_alcalinoT */ --persian-red: #c42e32ff;
/* metais_transicao */ --rose-taupe: #986676ff;
/* outros_metais */ --air-superiority-blue: #6c9dbaff;
/* semimetais */ --columbcssia-blue: #b5cedcff;
/* halogenios */ --white: #aaa;
/* gases_nobres */ --tea-rose-red: #eab1b3ff;
/* lantanideos */ --indian-red: #d66468ff;
/* actinidios */ --light-coral: #812225;

box-sizing: content-box;
min-width: 18%;
margin: 1.6rem;
color: #a1a1a1;
font: 1rem 'Lato', sans-serif;
/* border: 1px solid #eee; */

    &:before {
        content: '';
        position: absolute;
        margin-left: -28px;
        width: 20px;
        height: 20px;
        background-color: ${(props) =>
        props.color === 'nao_metais' ? 'var(--lapis-lazuli)' :
            props.color === 'metais_alcalinos' ? 'var(--english-violet)' :
                props.color === 'metais_alcalinosT' ? 'var(--persian-red)' :
                    props.color === 'metais_transicao' ? 'var(--rose-taupe)' :
                        props.color === 'outros_metais' ? 'var(--air-superiority-blue)' :
                            props.color === 'semimetais' ? 'var(--columbcssia-blue)' :
                                props.color === 'halogenios' ? 'var(--white)' :
                                    props.color === 'gases_nobres' ? 'var(--tea-rose-red)' :
                                        props.color === 'lantanideos' ? 'var(--indian-red)' :
                                            props.color === 'actinidios' ? 'var(--light-coral)' : '#eee'
    };
    }

`