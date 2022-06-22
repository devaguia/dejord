import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    .title {
        font-weight: 800;
        margin-top: 10px;
    }

    @media (min-width: 768px) {
        .fields-expense {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 3fr 2fr 1fr !important;
        }

        .fields-benefits {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

