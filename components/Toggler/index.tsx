import * as React from 'react';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ToggleProps {
  onViewChange: (view: string) => void; // Interface for passing the selected view mode
}

const VerticalToggleButtons: React.FC<ToggleProps> = ({ onViewChange }) => {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
    onViewChange(nextView); // Call the prop function to share the selected view mode with the parent component
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list" color='primary'>
        <ViewListRoundedIcon />
      </ToggleButton>
      <ToggleButton value="module"  color='primary' aria-label="module">
        <AppsRoundedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default VerticalToggleButtons;
