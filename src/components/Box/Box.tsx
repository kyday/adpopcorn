import styled from "styled-components";

type BoxProps = {
  width: string;
  height: string;
  padding: string;
  backgroundColor: string;
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({
  width,
  height,
  padding,
  backgroundColor,
  children,
}) => {
  return (
    <BoxContainer
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </BoxContainer>
  );
};

export default Box;

const BoxContainer = styled.div<BoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  border-radius: 0.625rem;
`;
