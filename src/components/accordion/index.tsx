
// single mode
// multi mode

import { useState } from "react";
import data from './data';
import './styles.scss';


export default function Accordion(){

    const [selected, setSelected] = useState<number[]>([]);

    function handleSingleSelection(currentId: number){

        let index = selected.findIndex(i => i === currentId);
        let newSelected: number[] = [...selected];

        if(index == -1)
            newSelected.push(currentId);
        else
            newSelected.splice(index, 1);

        setSelected(newSelected);
    }

    function handleToggle(){

        
    }

    return (<div className="accordion-wrapper">

        <div className="accordion">
        <button onClick={ handleToggle }>Toggle multi-selection</button>
            {
                data && data.length > 0 ? 
                data.map((item) => 
                    <div key={item.id} className="accordion-item">
                        <div onClick={() => handleSingleSelection(item.id)} className="title">
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                            {
                                selected.includes(item.id) ? 
                                <div className="item-content">{item.answer}</div>
                                : null
                            }
                    </div>
                )
                : <div>No data</div>

            }
        </div>
    </div>);
}