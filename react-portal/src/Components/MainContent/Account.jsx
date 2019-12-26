import React, { useState, useEffect , memo } from "react";
import './Account.css'
import SimpleSelect from '../CustomDropdown/Select'
const Loading = React.lazy(() => import('../Loading/Loading'));
var accountService = require('../../Services/AccountsService');

export const Accounts = ()=> {


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
    console.log("resp",accounts)
    return accounts?(
        <div className="grid-container-account">
            <div className="dropdown">
                <SimpleSelect accountsResp={accounts}/>
            </div>
            <div className="transactions"></div>
    </div>):<Loading/>
}


export default memo(Accounts)
