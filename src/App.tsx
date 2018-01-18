import * as React from 'react';
import { Fragment } from 'react';
import { css, styles } from 'linaria';

// import constants from './constants';

const constants = {
    titleColor: 'hotpink',
    titleBorder: '2px dashed purple',
};

const titleStyle = css`
color: ${constants.titleColor};
display: block;
border: ${constants.titleBorder};
`;

const paragraphStyle = css`
opacity: .6;
`;

export class App extends React.Component {
    render() {
        return (
            <Fragment>
                <h1 {...styles(titleStyle) }>Hello</h1>
                <p {...styles(paragraphStyle) }>This is my text</p>
            </Fragment>
        );
    }
}
