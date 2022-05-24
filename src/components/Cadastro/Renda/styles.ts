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
            grid-template-columns: 1fr 1fr 1fr;
        }

        .fields-benefits {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (min-width: 1080px) {
        .fields-expense {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr 1fr 1fr;

            .field-lg {
                &-l {
                    grid-column: 1 / 3;
                }
            }
        }

        .fields-benefits {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

