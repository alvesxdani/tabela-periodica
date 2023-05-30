import ColorComponent from "../Block";

const ChemicalElements = () => {
  return (
    <>
      <h1>Tabela Periódica</h1>
      
      {/* {
        window.Screen >= 1000 ? (<h2>Clique em um elemento</h2>) : (<h2>Deslize os elementos</h2>)
      } */}

      <div className="box_tabelaP">
        <div className='tabela_row'>
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='1' chemicalE='H' href="#" />

          {/* <div style={{ width: '952px' }}></div> */}
          <div className="espacamento"></div>

          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='2' chemicalE='He' href="#" />
        </div>

        <div className='tabela_row'>
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='3' chemicalE='Li' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='4' chemicalE='Be' href="#" />

          {/* <div style={{ width: '595px' }}></div> */}
          <div className="espacamento"></div>

          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='5' chemicalE='B' href="#" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='6' chemicalE='C' href="#" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='7' chemicalE='N' href="#" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='8' chemicalE='O' href="#" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='9' chemicalE='F' href="#" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='10' chemicalE='Ne' href="#" />
        </div>

        <div className='tabela_row'>
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='11' chemicalE='Na' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='12' chemicalE='Mg' href="#" />

          {/* <div style={{ width: '595px' }}></div> */}
          <div className="espacamento"></div>

          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='13' chemicalE='Al' href="#" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='14' chemicalE='Si' href="#" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='15' chemicalE='P' href="#" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='16' chemicalE='S' href="#" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='17' chemicalE='Cl' href="#" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='18' chemicalE='Ar' href="#" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='19' chemicalE='K' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='20' chemicalE='Ca' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='21' chemicalE='Sc' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='22' chemicalE='Ti' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='23' chemicalE='V' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='24' chemicalE='Cr' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='25' chemicalE='Mn' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='26' chemicalE='Fe' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='27' chemicalE='Co' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='28' chemicalE='Al' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='29' chemicalE='Ni' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='30' chemicalE='Zn' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='31' chemicalE='Ga' href="#" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='32' chemicalE='Ge' href="#" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='33' chemicalE='As' href="#" />
          <ColorComponent key={Math.random() * 10} color='nao_metais' numberE='34' chemicalE='Se' href="#" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='35' chemicalE='Br' href="#" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='36' chemicalE='Kr' href="#" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='37' chemicalE='Rb' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='38' chemicalE='Sr' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='39' chemicalE='Y' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='40' chemicalE='Zr' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='41' chemicalE='Nb' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='42' chemicalE='Mo' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='43' chemicalE='Tc' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='44' chemicalE='Ru' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='45' chemicalE='Rh' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='46' chemicalE='Pd' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='47' chemicalE='Ag' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='48' chemicalE='Cd' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='49' chemicalE='In' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='50' chemicalE='Sn' href="#" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='51' chemicalE='Sb' href="#" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='52' chemicalE='Te' href="#" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='53' chemicalE='I' href="#" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='54' chemicalE='Xe' href="#" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='55' chemicalE='Cs' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='56' chemicalE='Ba' href="#" />
          <ColorComponent key={Math.random() * 10} color='' numberE='57-71' chemicalE='' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='72' chemicalE='Hf' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='73' chemicalE='Ta' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='74' chemicalE='W' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='75' chemicalE='Re' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='76' chemicalE='Os' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='77' chemicalE='Ir' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='78' chemicalE='Pt' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='79' chemicalE='Au' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='80' chemicalE='Hg' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='81' chemicalE='Tl' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='82' chemicalE='Pb' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='83' chemicalE='Bi' href="#" />
          <ColorComponent key={Math.random() * 10} color='semimetais' numberE='84' chemicalE='Po' href="#" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='85' chemicalE='At' href="#" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='86' chemicalE='Rn' href="#" />
        </div>

        <div className="tabela_row">
          <ColorComponent key={Math.random() * 10} color='metais_alcalinos' numberE='87' chemicalE='Fr' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_alcalinosT' numberE='88' chemicalE='Ra' href="#" />
          <ColorComponent key={Math.random() * 10} color='' numberE='89-103' chemicalE='' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='104' chemicalE='Rf' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='105' chemicalE='Db' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='106' chemicalE='Sg' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='107' chemicalE='Bh' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='108' chemicalE='Hs' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='109' chemicalE='Mt' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='110' chemicalE='Ds' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='111' chemicalE='Rg' href="#" />
          <ColorComponent key={Math.random() * 10} color='metais_transicao' numberE='112' chemicalE='Cn' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='113' chemicalE='Nh' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='114' chemicalE='Fl' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='115' chemicalE='Mc' href="#" />
          <ColorComponent key={Math.random() * 10} color='outros_metais' numberE='116' chemicalE='Lv' href="#" />
          <ColorComponent key={Math.random() * 10} color='halogenios' numberE='117' chemicalE='Ts' href="#" />
          <ColorComponent key={Math.random() * 10} color='gases_nobres' numberE='118' chemicalE='Og' href="#" />
        </div>

        <div className="tabela_row outros_elementos">
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='57' chemicalE='La' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='58' chemicalE='Ce' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='59' chemicalE='Pr' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='60' chemicalE='Nd' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='61' chemicalE='Pm' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='62' chemicalE='Sm' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='63' chemicalE='Eu' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='64' chemicalE='Gd' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='65' chemicalE='Tb' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='66' chemicalE='Dy' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='67' chemicalE='Ho' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='68' chemicalE='Er' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='69' chemicalE='Tm' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='70' chemicalE='Yb' href="#" />
          <ColorComponent key={Math.random() * 10} color='lantanideos' numberE='71' chemicalE='Lu' href="#" />
        </div>

        <div className="tabela_row outros_elementos">
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='89' chemicalE='Ac' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='90' chemicalE='Th' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='91' chemicalE='Pa' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='92' chemicalE='U' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='93' chemicalE='Np' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='94' chemicalE='Pu' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='95' chemicalE='Am' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='96' chemicalE='Cm' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='97' chemicalE='Bk' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='98' chemicalE='Cf' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='99' chemicalE='Es' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='100' chemicalE='Fm' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='101' chemicalE='Md' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='102' chemicalE='No' href="#" />
          <ColorComponent key={Math.random() * 10} color='actinidios' numberE='103' chemicalE='Lr' href="#" />
        </div>
      </div>
    </>
  )
}

export default ChemicalElements;