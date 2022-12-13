import React from 'react';
import styled from 'styled-components';

// * 참고 - children은 <ContentsLayout></ContentsLayout> 태그 사이의 내용을 의미합니다. *

// * 사용법 - 2가지 props를 전달해줘야 합니다 *
// isTabMenu : 탭 메뉴 존재 여부를 boolean 값으로 전달해야 합니다. true인 경우 margin-bottom: 60px이 적용됩니다. 기본값은 true입니다. (사용 예: <ContentsLayout isTabMenu={true}>내용</ContentsLayout>))
// padding : 적용할 패딩을 문자열 값으로 전달해야 합니다. 이때 단축 속성으로 전달해야 합니다. 기본값은 상단 20px, 좌우 16px으로 적용되어 있습니다. (사용 예: <ContentsLayout padding='20px 0 30px 45px'>내용</ContentsLayout>)
const ContentsLayout = ({ children, isTabMenu = false, padding = '20px 16px 0 16px' }) => {
  return (
    <ContentsWrapper isTabMenu={isTabMenu} padding={padding}>
      {children}
    </ContentsWrapper>
  );
};

export default ContentsLayout;

const ContentsWrapper = styled.main`
  margin-top: 48px;
  margin-bottom: ${(props) => (props.isTabMenu ? '60px' : 0)};
  padding: ${(props) => props.padding};
`;
