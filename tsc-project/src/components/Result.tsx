import * as React from 'react';

interface Props{
    readonly waiting: boolean;
}

export const Result: React.SFC<Props> = ({children, waiting}) => {
    return(
        <div>
            {/* {waiting && <p>Cekej...</p>} */}
            <p>{waiting ? 'Cekej...' : children}</p>
        </div>
    )
}