const { Container } = require("react-bootstrap");

const CustomContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default CustomContainer;
