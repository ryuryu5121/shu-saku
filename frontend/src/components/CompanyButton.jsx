import Button from '@mui/material/Button';


export const CompanyButton = (props) => {
  return (
    <Button variant="contained"  onClick = {props.onClick}>
      {props.text}</Button>
  );
};