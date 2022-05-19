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
  padding: '0px 78px 0px 4px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: 'black',
  backgroundColor: 'transparent',
  borderBottom:'groove',
  boxShadow: 'none',
});

// Exports
export const Paragrafs = StyledParagraf;
export const Label = StyledLabel;


export const Header = () =>{
	return (
	<Paragrafs>
	<Flex css={{ flexWrap: 'wrap', alignItems: 'center' }}>
    	<Label htmlFor="firstName" css={{ lineHeight: '35px', marginRight: 15 }}>
      Quantidade
    	</Label>
    	<Input type="text" id="firstName" defaultValue="0.000,00" />
  	</Flex>
	</Paragrafs>
)}

export default Header