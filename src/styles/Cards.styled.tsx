import styled from 'styled-components';

interface StyledButtonProps {
    correct?: boolean;
    userClicked?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
 width: 100%;
 font-size: 1rem;
 padding: 10px;
 text-align: center;
 margin-bottom: 10px;
 cursor: pointer;
 background: ${({ correct, userClicked }) => (
        correct ?
            'linear-gradient(90deg, #56FFA4, #59BC86)' :
            !correct && userClicked ?
                'linear-gradient(90deg, #FF5656, #C16868)' :
                'transparent'
    )};
color: white;
`;