import { Box, Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import BarChart from './BarChart';
import styles from '../styles/style.module.scss'

const AccountSummary = ({ accounts }) => {

  const theme = useTheme()


  const [checkedUser, setCheckedUser] = useState([])
  const [selected, setSelected] = useState(false)


  const handleChecked = (user) => {
    setCheckedUser([user])
    setSelected(user.id)
    if (checkedUser[0] === user) {
      setSelected(false)
      setCheckedUser([])
    }
  }

  return (
    <Box >

      <Typography variant='h3'>Summary of Accounts</Typography>

      <Box
        sx={{
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column'
          }
        }}
        className={styles.accountSummary}
      >

        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>Select</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Debit</TableCell>
              <TableCell>Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map(account => (

              <TableRow key={account.id}
                sx={{ ":hover": { cursor: 'pointer' } }}
                onClick={() => handleChecked(account)}
              >

                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selected === account.id}
                  />
                </TableCell>

                <TableCell>
                  <Typography>{account.id}</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant='h6'>{account.name}</Typography>
                </TableCell>

                <TableCell>
                  <Typography> {account.debit}</Typography>
                </TableCell>

                <TableCell>
                  <Typography> {account.credit}</Typography>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box className={styles.barChart}>
          <BarChart data={checkedUser} />
        </Box>


      </Box>


    </Box>
  );
};

export default AccountSummary;