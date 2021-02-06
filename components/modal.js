import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

import CloseButton from "./closeButton";

const FadeIn = keyframes`
  from {
    top: -2rem;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  from {
    top: 0;
    opacity: 1;
  }

  to {
    top: -2rem;
    opacity: 0;
  }
`;

const ModalDialog = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  animation: ${(props) => (props.animateClose ? FadeOut : FadeIn)} 0.2s
    ${(props) => (props.animateClose ? "ease-out" : "ease-in")};
`;

const ModalHeader = styled.div`
  height: 6rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: fixed;
`;

const ModalHeaderContainer = styled.div`
  width: 56rem;
  max-width: 56rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Modal1 = styled.div`
  margin-top: 6rem;
  flex: 1 1 0%;
  display: flex;
  overflow: hidden;
  width: 100%;
  background-color: white;
`;

const Modal2 = styled.div`
  flex: 1 1 0%;
  overflow-y: scroll;
`;

const Modal3 = styled.div`
  max-width: 48rem;
  width: 48rem;
  margin-right: auto;
  margin-left: auto;
`;

export default function Modal(props) {
  const { clickHandler } = props;
  const [close, setClose] = React.useState(false);
  return (
    <ModalDialog
      onAnimationEnd={close ? clickHandler : null}
      animateClose={close}
    >
      <ModalHeader>
        <ModalHeaderContainer>
          <div>
            <h2>This is my header</h2>
            <p>This is my subheader</p>
          </div>
          <CloseButton
            onClick={() => {
              setClose(true);
            }}
          ></CloseButton>
        </ModalHeaderContainer>
      </ModalHeader>
      <Modal1>
        <Modal2>
          <Modal3>
            <p>
              Bacon ipsum dolor amet landjaeger doner porchetta beef ham hock
              andouille. Meatball jowl alcatra beef picanha turducken shankle
              short ribs, chislic andouille ham hock rump tri-tip hamburger
              ribeye. Fatback kevin chuck sirloin, bresaola andouille pork loin
              tri-tip. Sirloin kielbasa cupim buffalo andouille. Shank shankle
              tri-tip pork belly t-bone porchetta, ball tip leberkas. Pancetta
              spare ribs ham hock venison turducken. Sausage rump tri-tip spare
              ribs buffalo.
            </p>
            <p>
              Flank strip steak hamburger tail pork loin boudin corned beef
              burgdoggen beef ribs capicola tongue kielbasa rump short ribs.
              Bacon kielbasa prosciutto, porchetta ham shank burgdoggen meatloaf
              brisket picanha spare ribs beef ribs rump doner cupim. Brisket
              burgdoggen spare ribs picanha ribeye andouille. Porchetta cupim
              pastrami, capicola jerky corned beef jowl sirloin rump pork chop
              shank spare ribs shankle kevin.
            </p>
            <p>
              Pork belly pork chop brisket kielbasa, tail biltong bresaola
              chicken. Swine pig shoulder buffalo cow rump beef meatloaf
              burgdoggen tri-tip corned beef prosciutto. Pastrami turducken
              jowl, ham hock shank pork belly frankfurter bacon biltong filet
              mignon chuck t-bone ribeye. Brisket beef ribs pork belly kevin
              filet mignon chicken pork ball tip ham hock bresaola doner
              burgdoggen. Tongue strip steak chuck pig, venison spare ribs
              hamburger biltong kielbasa picanha prosciutto. Buffalo ham hock
              porchetta, kevin pastrami shoulder chuck rump chicken fatback
              hamburger spare ribs. Alcatra pork drumstick ham hock corned beef
              prosciutto bacon chicken rump shank turducken, picanha ribeye pig
              salami.
            </p>
            <p>
              Kevin swine ham sirloin. Venison short loin turducken tongue
              salami. Salami pancetta chuck landjaeger sirloin porchetta kevin
              brisket shank. Meatball pig shank fatback rump doner. Rump corned
              beef short ribs, burgdoggen shank tri-tip andouille ham hock
              hamburger. Ball tip filet mignon meatball, pork chop tenderloin
              prosciutto sausage tail doner burgdoggen ham boudin turkey.
            </p>
            <p>
              Drumstick sirloin flank prosciutto ball tip. Tail pork loin chuck
              tri-tip andouille pig. Swine drumstick fatback, pork jowl meatball
              porchetta tri-tip. Shoulder kielbasa boudin swine shankle
              landjaeger. Drumstick doner flank, alcatra tenderloin pancetta
              strip steak spare ribs biltong turducken ground round.
            </p>
            <p>
              Bacon ipsum dolor amet landjaeger doner porchetta beef ham hock
              andouille. Meatball jowl alcatra beef picanha turducken shankle
              short ribs, chislic andouille ham hock rump tri-tip hamburger
              ribeye. Fatback kevin chuck sirloin, bresaola andouille pork loin
              tri-tip. Sirloin kielbasa cupim buffalo andouille. Shank shankle
              tri-tip pork belly t-bone porchetta, ball tip leberkas. Pancetta
              spare ribs ham hock venison turducken. Sausage rump tri-tip spare
              ribs buffalo.
            </p>
            <p>
              Flank strip steak hamburger tail pork loin boudin corned beef
              burgdoggen beef ribs capicola tongue kielbasa rump short ribs.
              Bacon kielbasa prosciutto, porchetta ham shank burgdoggen meatloaf
              brisket picanha spare ribs beef ribs rump doner cupim. Brisket
              burgdoggen spare ribs picanha ribeye andouille. Porchetta cupim
              pastrami, capicola jerky corned beef jowl sirloin rump pork chop
              shank spare ribs shankle kevin.
            </p>
            <p>
              Pork belly pork chop brisket kielbasa, tail biltong bresaola
              chicken. Swine pig shoulder buffalo cow rump beef meatloaf
              burgdoggen tri-tip corned beef prosciutto. Pastrami turducken
              jowl, ham hock shank pork belly frankfurter bacon biltong filet
              mignon chuck t-bone ribeye. Brisket beef ribs pork belly kevin
              filet mignon chicken pork ball tip ham hock bresaola doner
              burgdoggen. Tongue strip steak chuck pig, venison spare ribs
              hamburger biltong kielbasa picanha prosciutto. Buffalo ham hock
              porchetta, kevin pastrami shoulder chuck rump chicken fatback
              hamburger spare ribs. Alcatra pork drumstick ham hock corned beef
              prosciutto bacon chicken rump shank turducken, picanha ribeye pig
              salami.
            </p>
            <p>
              Kevin swine ham sirloin. Venison short loin turducken tongue
              salami. Salami pancetta chuck landjaeger sirloin porchetta kevin
              brisket shank. Meatball pig shank fatback rump doner. Rump corned
              beef short ribs, burgdoggen shank tri-tip andouille ham hock
              hamburger. Ball tip filet mignon meatball, pork chop tenderloin
              prosciutto sausage tail doner burgdoggen ham boudin turkey.
            </p>
            <p>
              Drumstick sirloin flank prosciutto ball tip. Tail pork loin chuck
              tri-tip andouille pig. Swine drumstick fatback, pork jowl meatball
              porchetta tri-tip. Shoulder kielbasa boudin swine shankle
              landjaeger. Drumstick doner flank, alcatra tenderloin pancetta
              strip steak spare ribs biltong turducken ground round.
            </p>
          </Modal3>
        </Modal2>
      </Modal1>
    </ModalDialog>
  );
}
