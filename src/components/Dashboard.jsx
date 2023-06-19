import React from 'react';
import AccountSummary from './AccountSummary';
import { Box} from '@mui/material';


// Helper function to calculate account summary
const getAccountSummary = (transactions) => {

    const accounts = {};
    transactions.forEach((transaction) => {
        const { account, debit, credit, month } = transaction;

        if (!accounts[account]) {
            accounts[account] = { debit: 0, credit: 0, month: [] };
        }

        const index = accounts[account].month.findIndex((m) => m.month === month);
        if (index === -1) {
            accounts[account].month.push({ month: month, debit: debit, credit: credit });
        } else {
            accounts[account].month[index].debit += debit;
            accounts[account].month[index].credit += credit;
        }


        accounts[account].debit += debit;
        accounts[account].credit += credit;

    });


    return Object.entries(accounts).map(([name, { debit, credit, month }], index) => ({
        id: index + 1,
        name,
        debit,
        credit,
        month
    }));
};

const Dashboard = ({ Data }) => {


    return (
        <Box
        padding={'2%'}
        >

            <Box  >
                <AccountSummary accounts={getAccountSummary(Data)} />
            </Box>

        </Box>
    );
};

export default Dashboard;

