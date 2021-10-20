import styled from 'styled-components';

export const Form = styled.form`
    position: relative;
    height: 400px;
    border-radius: 1.3rem;
    z-index: 122;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, .1);
    border-top: 1px solid rgba(255, 255, 255, .5);
    border-left: 1px solid rgba(255, 255, 255, .1);
    backdrop-filter: blur(5px);

    TextField{
        width: 100%;
    }
`