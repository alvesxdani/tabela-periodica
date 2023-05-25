import React from 'react';
import ColorComponent from "./components/Block";

function App() {

  return (
    <div className='box'>
      <h1>Tabela Periódica</h1>

      <div className="box_tabelaP">
        <div className='tabela_row' style={{ justifyContent: 'space-between' }}>
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='1' chemicalE='H' href="http://google.com" />

          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='2' chemicalE='He' href="http://google.com" />
        </div>

        <div className='tabela_row'>
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='3' chemicalE='Li' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='4' chemicalE='Be' href="http://google.com" />

          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return <ColorComponent key={Math.random() * 10} color='' numberE='' chemicalE='' href="http://google.com" />
            })
          }

          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='5' chemicalE='B' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='6' chemicalE='C' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='7' chemicalE='N' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='8' chemicalE='O' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='9' chemicalE='F' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='10' chemicalE='Ne' href="http://google.com" />
        </div>

        <div className='tabela_row'>
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='11' chemicalE='Na' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='12' chemicalE='Mg' href="http://google.com" />

          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return <ColorComponent key={Math.random() * 10} color='' numberE='' chemicalE='' href="http://google.com" />
            })
          }

          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='13' chemicalE='Al' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='14' chemicalE='Si' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='15' chemicalE='P' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='16' chemicalE='S' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='17' chemicalE='Cl' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='18' chemicalE='Ar' href="http://google.com" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='19' chemicalE='K' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='20' chemicalE='Ca' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='21' chemicalE='Sc' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='22' chemicalE='Ti' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='23' chemicalE='V' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='24' chemicalE='Cr' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='25' chemicalE='Mn' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='26' chemicalE='Fe' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='27' chemicalE='Co' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='28' chemicalE='Al' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='29' chemicalE='Ni' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='30' chemicalE='Zn' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='31' chemicalE='Ga' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='32' chemicalE='Ge' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='33' chemicalE='As' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='34' chemicalE='Se' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='35' chemicalE='Br' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='36' chemicalE='Kr' href="http://google.com" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='37' chemicalE='Rb' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='38' chemicalE='Sr' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='39' chemicalE='Y' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='40' chemicalE='Zr' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='41' chemicalE='Nb' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='42' chemicalE='Mo' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='43' chemicalE='Tc' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='44' chemicalE='Ru' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='45' chemicalE='Rh' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='46' chemicalE='Pd' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='47' chemicalE='Ag' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='48' chemicalE='Cd' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='49' chemicalE='In' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='50' chemicalE='Sn' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='51' chemicalE='Sb' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='52' chemicalE='Te' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='53' chemicalE='I' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='54' chemicalE='Xe' href="http://google.com" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='55' chemicalE='Cs' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='56' chemicalE='Ba' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='' numberE='57-71' chemicalE='' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='72' chemicalE='Hf' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='73' chemicalE='Ta' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='74' chemicalE='W' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='75' chemicalE='Re' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='76' chemicalE='Os' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='77' chemicalE='Ir' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='78' chemicalE='Pt' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='79' chemicalE='Au' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='80' chemicalE='Hg' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='81' chemicalE='Tl' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='82' chemicalE='Pb' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='83' chemicalE='Bi' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='84' chemicalE='Po' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='85' chemicalE='At' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='86' chemicalE='Rn' href="http://google.com" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='87' chemicalE='Fr' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='88' chemicalE='Ra' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='' numberE='89-103' chemicalE='' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='104' chemicalE='Rf' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='105' chemicalE='Db' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='106' chemicalE='Sg' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='107' chemicalE='Bh' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='108' chemicalE='Hs' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='109' chemicalE='Mt' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='110' chemicalE='Ds' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='111' chemicalE='Rg' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='112' chemicalE='Cn' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='113' chemicalE='Nh' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='114' chemicalE='Fl' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='115' chemicalE='Mc' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='116' chemicalE='Lv' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='117' chemicalE='Ts' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='118' chemicalE='Og' href="http://google.com" />
        </div>

        <div className="tabela_row" style={{marginTop: '2rem', marginLeft: '11.4rem'}}>
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='57' chemicalE='La' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='58' chemicalE='Ce' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='59' chemicalE='Pr' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='60' chemicalE='Nd' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='61' chemicalE='Pm' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='62' chemicalE='Sm' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='63' chemicalE='Eu' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='64' chemicalE='Gd' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='65' chemicalE='Tb' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='66' chemicalE='Dy' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='67' chemicalE='Ho' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='68' chemicalE='Er' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='69' chemicalE='Tm' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='70' chemicalE='Yb' href="http://google.com" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='71' chemicalE='Lu' href="http://google.com" />
        </div>

        <div className="tabela_row" style={{marginLeft: '11.4rem'}}>
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='89' chemicalE='Ac' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='90' chemicalE='Th' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='91' chemicalE='Pa' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='92' chemicalE='U' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='93' chemicalE='Np' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='94' chemicalE='Pu' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='95' chemicalE='Am' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='96' chemicalE='Cm' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='97' chemicalE='Bk' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='98' chemicalE='Cf' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='99' chemicalE='Es' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='100' chemicalE='Fm' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='101' chemicalE='Md' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='102' chemicalE='No' href="http://google.com" />
           <ColorComponent key={Math.random() * 10} color='actinidios' numberE='103' chemicalE='Lr' href="http://google.com" />
        </div>

      </div>
    </div>
  )
}

export default App
