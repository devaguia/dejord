import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;

        margin: 50px 0;

        input {
            padding: 0;
            min-width: 120px;

            &[type=submit] {
                background-color: var(--submit-ligth) !important;
                color: var(--text-color);
            }

            &[type=button] {
                background-color: var(--cancel-color) !important;
                color: var(--primary-dark) !important;
            }
        }
    }
`;

