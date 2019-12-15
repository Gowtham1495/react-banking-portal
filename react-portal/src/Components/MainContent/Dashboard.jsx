import React, { useState, useEffect ,memo} from "react";
var accountService = require('../../Services/AccountsService');
const Loading = React.lazy(() => import('../Loading/Loading'));

export const Dashboard = ()=> {


    const [accounts , setAccounts] = useState();
    const [error , setError] = useState(false);
    useEffect(() => {
        accountService.getAccounts((err, resp) => {
            if (err) {
                console.log(JSON.stringify(err.stack));
                console.log(err.message);
                if (err.message && err.message !== '') {
                   setError(true);
                }
            } else {
                setAccounts(resp);
            }
        });
    },[]);

    return accounts ? (
        <main className="main">
            <div className="main-overview">
                {accounts.accountList.map((account , i)=>(
                    <div key={i} className="overviewcard">
                            <div className="overviewcard__icon">{account.nickName}</div>
                            <div className="overviewcard__info">{account.availableBalanceDisp.availBalValue}</div>
                    </div>
                ))}
            </div>
        </main>
    ) : <Loading/>
}


export default memo(Dashboard);
