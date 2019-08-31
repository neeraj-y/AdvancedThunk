import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;
        -webkit-font-smoothing: antialiased;
        background: #d5e9f5;
        color: #414347;
        font-size: 1.6em;
    }
`;

export const Header = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
`;

export const SubHeader1 = styled.div`
    align-items: center;
    background-color: #ffecec; 
    display: flex;
    justify-content: center;
    margin-bottom: 1.65rem;
    padding: 2rem;
    width: 100%;
`;

export const SubHeader2 = styled.div`
    p {
        margin: 0;
        padding: 0;
    }
`;

export const Main = styled.div`
    max-width: calc(100vw - 300px);
    background: hsla(0,0%,100%,.9);
    border: .2rem solid hsla(0,0%,100%,.9);
    position: relative;
    top: 220px;
    text-align: center;
    margin: 0 auto;
    /*height: calc(100vh - 240px);
    overflow-y: scroll;*/
    padding: 2rem 0;
    box-sizing: border-box;

    p {
        margin: 0 0 5px 0;
        padding: 0;

        &:hover {
            color: ${props => props.hoverColor}
        }

        &:nth-last-of-type(1) {
            margin-bottom: 20px;
        }
    }
`;

export const PhotoDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
`;

export const Div = styled.div`
    margin: 10px 0;
    padding: 5px 0;
`;

export const Img = styled.img`
    max-width: 150px;
    margin: 0 auto;
`;