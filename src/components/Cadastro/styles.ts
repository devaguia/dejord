import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .title {
        margin-bottom: 10px;
    }
    input {
        width: 100%;
    }

    @media (min-width: 768px) {
        .fields {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr;
        }
    }
`;
