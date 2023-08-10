import { customColor, GeocoderResult, Typography, useGeocoder } from '@street-vendor/core';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface ResultListProps {
  isEnd: boolean;
}

interface SearchBoxProps {
  onSelected: (result: GeocoderResult) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const { fromAddress } = useGeocoder();

  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string[]>([]);

  return (
    <Box>
      <InputBox>
        <SearchIcon
          onClick={async () => {
            const data = await axios.get(
              `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey${process.env.NEXT_PUBLIC_JUSO_KEY}&currentPage=1&countPerPage=10&keyword=${query}&resultType=json`
            );

            console.log(data.data.results.juso)

            setResult(data.data.results.juso.map((value) => value.roadAddr));
          }}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.27291 3.83084C8.39975 3.6766 7.50046 3.78474 6.68876 4.14159C5.87706 4.49844 5.18941 5.08798 4.71276 5.83565C4.23612 6.58331 3.99189 7.45553 4.01095 8.342C4.03002 9.22848 4.31152 10.0894 4.81987 10.8159C5.32822 11.5424 6.04058 12.1018 6.86688 12.4234C7.69317 12.745 8.59627 12.8144 9.46199 12.6228C10.3277 12.4311 11.1172 11.9871 11.7305 11.3468C12.3439 10.7064 12.7536 9.89864 12.9078 9.02548C13.1133 7.85478 12.846 6.65038 12.1645 5.67653C11.4831 4.70268 10.4431 4.03891 9.27291 3.83084ZM9.63291 1.79287C10.9091 2.01832 12.0899 2.61715 13.0258 3.51364C13.9617 4.41012 14.6107 5.564 14.8908 6.82936C15.1709 8.09472 15.0695 9.41472 14.5994 10.6224C14.1293 11.8302 13.3116 12.8714 12.2498 13.6144C11.188 14.3574 9.92962 14.7689 8.63393 14.7967C7.33824 14.8246 6.06338 14.4676 4.97058 13.7709C3.87777 13.0743 3.01609 12.0692 2.4945 10.8828C1.97292 9.69639 1.81486 8.38197 2.0403 7.10574C2.34262 5.39436 3.31239 3.87318 4.73628 2.87682C6.16017 1.88047 7.92154 1.49056 9.63291 1.79287Z"
              fill={customColor.orange2}
            />
            <path
              d="M15.1443 18.1762C15.0106 18.1531 14.8828 18.1039 14.7683 18.0313C14.6537 17.9588 14.5545 17.8644 14.4764 17.7535L11.6777 13.7538C11.52 13.5284 11.4583 13.2497 11.5062 12.9789C11.554 12.7081 11.7074 12.4674 11.9328 12.3097C12.1581 12.1521 12.4368 12.0904 12.7076 12.1382C12.9784 12.1861 13.2191 12.3395 13.3768 12.5648L16.1726 16.564C16.2901 16.7316 16.3553 16.9303 16.3599 17.135C16.3644 17.3397 16.3081 17.5411 16.1981 17.7137C16.0881 17.8864 15.9293 18.0225 15.7419 18.1049C15.5545 18.1872 15.3458 18.2119 15.1443 18.1762Z"
              fill={customColor.orange2}
            />
          </svg>
        </SearchIcon>
        <SearchInput
          placeholder="지번, 도로명, 건물명으로 검색"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputBox>
      <Division />
      <ResultBox>
        {query !== '' ? (
          result.map((i, index) => (
            <ResultItem isEnd={index === result.length - 1} key={index} onClick={async () => {
              props.onSelected(await fromAddress(i)[0])
            }}>
              <Typography size="12">{i}</Typography>
              {/* <Typography size="12" color="orange2">
                {i['2']}
              </Typography> */}
            </ResultItem>
          ))
        ) : (
          <Example>
            <Typography size="14" style={{ padding: '6px 0' }}>
              이렇게 검색해보세요!
            </Typography>
            <div>
              <Typography size="12">도로명 + 건물번호</Typography>
              <Typography
                size="12"
                style={{ paddingTop: '4px' }}
                color={'gray'}
              >
                길노프로 11길 11
              </Typography>
            </div>
            <div>
              <Typography size="12">지역명(동/리) + 번지</Typography>
              <Typography
                size="12"
                style={{ paddingTop: '4px' }}
                color={'gray'}
              >
                길노프로 1234-5
              </Typography>
            </div>
            <div>
              <Typography size="12">
                지역명(동/리) + 건물명(아파트명)
              </Typography>
              <Typography
                size="12"
                style={{ paddingTop: '4px' }}
                color={'gray'}
              >
                길노프동 떡볶이빌딩
              </Typography>
            </div>
          </Example>
        )}
      </ResultBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4%;
  width: 100%;
  height: calc(100% - 68px);
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 36px;
  background: ${customColor.beige};
  margin-top: 10px;
  border-radius: 10px;
  padding: 0 10px;
  gap: 10px;
  align-items: center;
`;
const SearchIcon = styled.button`
  display: flex;
`;
const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  margin-top: 2px;
  font-size: 14px;
  ::placeholder {
    color: ${customColor.gray};
    font-size: 14px;
  }
`;
const Division = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  margin: 12px 0;
  opacity: 0.7;
  background: ${customColor.gray};
`;
const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const Example = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;
const ResultItem = styled.div<ResultListProps>`
  display: flex;
  flex-direction: row;
  min-height: 36px;
  width: 100%;
  align-items: center;
  border-bottom: ${(props) =>
    !props.isEnd && `1px solid ${customColor.gray + '55'}`};
`;
