import styled from 'styled-components';

const StyledComponent = styled.div`

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
/* actinidios */ --light-coral: #da7276ff;

  color: #fff;
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
    props.color === 'actinidios' ? 'var(--light-coral)' : '#eee; color: #a1a1a1;'
  };

  
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 0.4rem;
  box-sizing: border-box;
  transition: .80s ease-in-out;
  border: 2px solid #ccc;

    .number_element {
      width: 100%;
      font: 0.6rem 'Montserrat',sans-serif;
    }
    .chemical_element {
      width: 100%;
      font: bolder 1.5rem 'Lato',sans-serif;
      text-align: center;
    }
  
  &:hover {
    filter: saturate(0%);
  }

`;

export default StyledComponent;