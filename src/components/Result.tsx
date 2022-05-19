import { styled } from '@stitches/react';

const Button = styled('button',{
	backgroundColor: '#4c4cff',
	color: 'White',
	borderRadius: '4px',
	width: '290px',
	border: 'black',
	fontSize: 18,
	justifyContent: 'center',
})

//Export
export const StyledButton = Button;

export const Result = () =>{
	return(
		<Button>
			Converter
		</Button>
	)
}

export default Result;