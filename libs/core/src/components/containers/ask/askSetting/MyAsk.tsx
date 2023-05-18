import styled from 'styled-components';
import { CardAsk } from '../../../card/CardAsk';
import { LoadingContainer } from '../../loading/LoadingContainer';

interface RequestType {
  createdAt: string;
  questionId: number;
  status: string;
  title: string;
  type: string;
}
interface Props {
  detailPathName: string;
  data: RequestType[];
  isLoading: boolean;
}

export const MyAsk = ({ detailPathName, data, isLoading }: Props) => {
  return (
    <Container>
      <ContainerInner>
        <CardList>
          {isLoading ? (
            <LoadingContainer />
          ) : (
            data.map((i) => (
              <CardAsk
                detailPathName={detailPathName}
                key={i.questionId}
                data={i}
              />
            ))
          )}
          <ContainerEnd />
        </CardList>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  align-items: center;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 390px;
`;
const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 7%;
  gap: 26px 0;
`;
const ContainerEnd = styled.div`
  display: flex;
`;
