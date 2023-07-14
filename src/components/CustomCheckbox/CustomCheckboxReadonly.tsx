import { Container } from './CustomCheckboxReadonly.styled';
import { Checkbox } from '@mui/material';
import { ReactComponent as CheckboxIcon } from '../../images/icons/checkbox.svg';
import { ReactComponent as CheckboxIconChecked } from '../../images/icons/checkboxChecked.svg';

const label = { inputProps: { 'aria-label': 'Book status' } };

export const CustomCheckboxReadonly = ({
  isChecked,
}: {
  isChecked: boolean;
}) => {
  return (
    <Container>
      <Checkbox
        {...label}
        icon={<CheckboxIcon />}
        checkedIcon={<CheckboxIconChecked />}
        checked={isChecked}
        disabled
      />
    </Container>
  );
};
