import { useState } from "react"

// necesita el prop onSubmit
function SearchBar({ onSubmit }){
    // Crear el estado term de tipo string ('')


    const handleFormSubmit = (event) => {
        // Evite el comportamiento por default del evento submit
        console.log('I need to tell the parent about some data')
        // Llame a la funcion prop onSubmit con el parametro term
    }

    const handleChange = (event) => {
        // Actualice el estado term
    }

    console.log('term', term)

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input
                    className="input is-info"
                    type="text"
                    placeholder="Info input"
                    onChange={handleChange} value={term}
                />
            </form>
        </div>
    )
}

export default SearchBar