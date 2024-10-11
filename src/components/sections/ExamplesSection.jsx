import { EXAMPLES } from '../../data.js';
import { useState } from 'react';
import TabButton from '../TabButton.jsx';
import Tabs from '../Tabs.jsx';

export default function ExamplesSection() {
    let [selectedState, setSelectedState] = useState()
    function handleClick(selectedButton) {
        setSelectedState(selectedButton)
    }
    let tabContent = <p>please select a button</p>
    if (selectedState) {
        tabContent = (
            <div id="tabContent">
                <h3>{EXAMPLES[selectedState].title}</h3>
                <p>{EXAMPLES[selectedState].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedState].code}
                    </code>
                </pre>
            </div>
        )
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <Tabs
                buttons={
                    <menu>
                        <TabButton
                            isSelected={selectedState === 'components'}
                            onSelect={() => handleClick('components')}
                        >
                            components
                        </TabButton>
                        <TabButton 
                            isSelected={selectedState === 'jsx'} 
                            onSelect={() => handleClick('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton 
                            isSelected={selectedState === 'props'} 
                            onSelect={() => handleClick('props')}
                        >
                            props
                        </TabButton>
                        <TabButton 
                            isSelected={selectedState === 'state'} 
                            onSelect={() => handleClick('state')}
                        >
                            states
                        </TabButton>
                    </menu>
                }
            > {tabContent}</Tabs>



        </section>
    )
}