import React from 'react';
import { allQuestions } from './API/API';
import FormCard, { UserEndpoints } from './components/FormCard';
import { GlobalStyle, Wrapper, Heading } from './styles/App.styled';

const App = () => {

    const startTrivia = async (endpoints: UserEndpoints) => {
        const { questionAmt, category, difficulty } = endpoints;
        const getQuestions = await allQuestions();
    }


    return (
        <Wrapper>
            <GlobalStyle />
            <Heading>Quiz App</Heading>
            <FormCard callback={startTrivia} />
        </Wrapper>
    )
}

export default App;