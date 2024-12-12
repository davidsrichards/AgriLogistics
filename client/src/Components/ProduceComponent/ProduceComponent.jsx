import React from 'react';
import ProduceCmpt from './ProduceCmpt';

const ProduceComponents = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h1 className=" self-center text-[2.5rem] font-semibold mx-auto text-center">
                our produce to our client:
            </h1>
            <ProduceCmpt />
        </div>
    );
});

export default ProduceComponents;
