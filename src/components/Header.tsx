import { styled } from '@stitches/react';
import * as LabelPrimitive from '@radix-ui/react-label';

const StyledParagraf = styled('p',{
	padding:' 20px 2px'
});

const StyledLabel = styled(LabelPrimitive.Root, {
	fontSize: 15,
	fontWeight: 500,
	color: 'black',
	userSelect: 'none',
  });

const Flex = styled('div', { display: 'flex' });
const Input = styled('input', {
  all: 'unset',
  width: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 78px 0px 0px',
  height: 35,
  fontSize: 25,
  lineHeight: 1,
  color: '#4c4cff',
  backgroundColor: 'transparent',
  borderBottom:'2px solid #4c4cff',
  boxShadow: 'none',
});

// Exports
export const Paragrafs = StyledParagraf;
export const Label = StyledLabel;


export const Header = () =>{
	return (
	<Paragrafs>
	<Flex css={{ flexWrap: 'wrap', alignItems: 'center' }}>
    	<Label htmlFor="valueNumber" css={{ lineHeight: '35px', marginRight: 15 }}>
      Quantidade
    	</Label>
    	<Input type="number" step="0.01" id="valueNumber"/>
  	</Flex>
	</Paragrafs>
)}

export default Header