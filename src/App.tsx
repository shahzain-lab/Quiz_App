import React from 'react';
import FormCard from './components/FormCard';
import { GlobalStyle, Wrapper, Heading } from './styles/App.styled';

const App = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Heading>Quiz App</Heading>
            <FormCard />
        </Wrapper>
    )
}

export default App;