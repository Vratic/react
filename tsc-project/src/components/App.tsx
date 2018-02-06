import * as React from 'react';
import { Title } from './Title';
import { SelectLang } from './SelectLang';
import { TextInput } from "./TextInput";

interface Props {
    name: string;
}

interface State {
    readonly from : string;
    readonly to : string;
    readonly q : string;
    readonly resultText?: string;
}

// const state : State = {
//     from : '',
//     to : '',
//     q : '',
// }

// const state2 = {
//     ...state,
//     from : "adasdad",
// }

export class App extends React.Component <Props, State> {

    constructor(props: Props, context: any){
        super(props, context);
        this.state = {
            from: 'cs', 
            to: 'en',
            q: '',
        };
    }

    handleOnChangeFrom = (from: string):void => {
        this.setState({from});
    }

    handleOnChangeTo = (to: string):void => {
        this.setState({to});
    }

    handleOnChange = (q: string) => {
        this.setState({q});
    }

    handleOnClick = () => {
        const {q} = this.state;
        this.setState(
            {
                resultText: q
            }
        );
    }
    
    render() {
        const {from, to, q, resultText} = this.state;
        return (
            <div>
                <Title text={'React'} />

                <SelectLang title={'From'} value={from} onClickChange={this.handleOnChangeFrom}/>
                <SelectLang title={'To'} value={to} onClickChange={this.handleOnChangeTo}/>
                <TextInput value={q} onChange={this.handleOnChange} />
                
                <div>
                    <button onClick={this.handleOnClick}>DONE</button>
                </div>
                <div>
                    <h1>state:</h1>
                    <pre>
                        {JSON.stringify(this.state)}
                    </pre>
                </div>
            </div>
        );
    }
}