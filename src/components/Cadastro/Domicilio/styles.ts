import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;

    .field {
        input[type=checkbox] {
            width: initial;
        }

        label {
            position: relative;
            bottom: 15px;
            font-size: 14px;
            margin-left: 10px;
        }
    } 


    @media (min-width: 768px) {
        .fields {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr;
        }
    }
`;

