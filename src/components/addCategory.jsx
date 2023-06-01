import { useState } from "react";


export const AddCategory = function({onNewCategory}) {


    const [heros, setHeros] = useState([])
    const valuesInput = function(e) {
        setHeros(e.target.value)
    }

    const insertCategory = function(e) {
        e.preventDefault();
        if(heros.trim().length <= 1) return;
        // setCategories(Element => [heros, ...Element])
        onNewCategory(heros.trim())

        setHeros('');
    }


    return(
        <form onSubmit={insertCategory}>
            <input
            value={heros}
            onChange={valuesInput}
            type="text"
            placeholder="Search the gif's"/>
        </form>
    )
}