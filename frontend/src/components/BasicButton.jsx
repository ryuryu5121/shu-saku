import Button from '@mui/material/Button';


export const BasicButton = (props) => {
  return (
      <Button variant="text" onClick = {props.onClick}>
        {props.text}
      </Button>
  );
};


      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}