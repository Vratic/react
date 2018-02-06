import * as React from 'react';

interface Props{
    readonly onClick: () => void;
    readonly disabled: boolean;
}

export const Button: React.SFC<Props> = ({children, onClick, disabled}) => {
    return(
        <div>
            <button onClick={onClick} disabled={disabled}>{children}</button>
        </div> 
    )
}