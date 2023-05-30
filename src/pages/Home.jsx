import React from 'react';
import ChemicalElements from '../components/ChemicalElements';
import TableCaption from '../components/Caption';
import BoxTable from '../components/BoxTable';
import Nav from '../components/Nav';

function Home() {

    return (
        <>
            <Nav />

            <main>
                <BoxTable content={<ChemicalElements />} />
                <BoxTable content={<TableCaption />} />
            </main>
        </>
    )
}

export default Home
