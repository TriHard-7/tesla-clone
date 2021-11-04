import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Header() {
   return (
      <Container>
         <a> <img src="/images/logo.svg" alt="" /></a>
         <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
            <a href="#">Solar Panel</a>
            <a href="#">Solar Roof</a>
         </Menu>
         <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <a href="#">Menu</a>
         </RightMenu>
         <BurgerNav>
            <CloseWrapper>
               <CustomClose />
            </CloseWrapper>

            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
         </BurgerNav>
      </Container>
   )
}

export default Header
const Container = styled.div`
min-height : 60px;
position : fixed;
display  : flex;
align-items: center;
justify-content: space-between;
padding : 0 20px;
top : 0;
left : 0;
right : 0;
z-index : 1;
//letter-spacing : px;



`

const Menu = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex : 1;

a {
   font-weight : 600;
   text-transform : uppercase;
   //font-family : "Gotham Book";
   
   margin-right : 10px;
}

@media(max-width : 768px) {
   display : none;
}
`
const RightMenu = styled.div`
a {
   font-weight : 600;
   text-transform : uppercase;
   //font-family : "Gotham Book";
   padding : 0 10px;
   flex-wrap : nowrap;
}
`

const BurgerNav = styled.div`
position : fixed;
top : 0;
bottom : 0;
right : 0;
background : white;
width : 300px;
z-index : 16;
list-style: none;
padding : 20px;
display : flex;
flex-direction : column;
//justify-contentjustify-content : flex-start;
text-align : start;
li {
   padding : 15px 0;
   border-bottom : 1px solid rgba(0,0,0,0.2);
   font-weight : 400;
}
`

const CustomClose = styled(CloseIcon)`
cursor : pointer;

`

const CloseWrapper = styled.div`
  display : flex;
  justify-content : flex-end;
`