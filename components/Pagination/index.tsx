import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRanges() {
  return (
    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray-900' }}>
      <Pagination
        count={30}
        defaultPage={1}
        siblingCount={10}
        color='primary'
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white', // Change the color of pagination items
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 255, 0.1)', // Change the background color on hover
            },
          },
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: 'green', // Change the background color of the selected page
            color: 'white', // Change the text color of the selected page
          },
        }}
      />
    </Stack>
  );
}
