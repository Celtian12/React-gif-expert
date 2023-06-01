import { useState } from "react"
import { AddCategory } from "./components/addCategory"
import { GifGriddAdd } from "./components/GifGrid"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
    //useState(['one punch man', 'Dragon ball'])
    const onAddCategory = function(one) {
        if(categories.includes(one)) return;
        setCategories([one, ...categories]);
    }
    return(
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory = {onAddCategory}/>
    {/* <button onClick={onAddCategory}>Insert</button> */}
    <div>
        {categories.map(Element => 
            <GifGriddAdd key={Element} categories= {Element}/>
        )}
    </div>
    </>
    )
}