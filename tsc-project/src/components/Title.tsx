import * as React from 'react';

interface Props{
    readonly text: string;
}

export const Title: React.SFC<Props> = ({text}) => <h1>{text}</h1>