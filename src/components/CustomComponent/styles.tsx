import styled from "styled-components";
import { Props } from "./types";
import Pagination from "@material-ui/lab/Pagination";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex: 1;
`;

const Container = (props: Props) => {
  return (
    <>
      <>
        <ContainerWrapper>
          <ContentWrapper>{props.children}</ContentWrapper>
        </ContainerWrapper>
        <PaginationWrapper
          className={props.className}
          onChange={props.onChange}
          count={props.count}
          variant={props.variant}
          shape={props.shape}
        />
      </>
    </>
  );
};

export default Container;
