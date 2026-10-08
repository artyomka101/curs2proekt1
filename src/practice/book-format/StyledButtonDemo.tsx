import styled from "@emotion/styled";

type ButtonSize = "small" | "large";

interface ButtonStyleProps {
    size: ButtonSize;
}

export const ButtonDemo = styled.button<ButtonStyleProps>`
    color: ${({size})=> {
        if (size === "small"){
            return "red"
        }
        return "blue"
    }};
`;

export default function Button(){
    return <ButtonDemo size = "small">Кнопка</ButtonDemo>;
}