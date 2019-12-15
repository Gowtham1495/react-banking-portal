import React, { useState, useEffect } from "react";
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
    });

    return accounts ? (
        
        <main className="main">
            <div className="main-overview">
                <div className="overviewcard">
                    <div className="overviewcard__icon">Checking Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Loan Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Savings Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Mortgage Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Checking Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Loan Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Savings Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Mortgage Acc</div>
                    <div className="overviewcard__info">$26,000</div>
                </div>
            </div>
        </main>
    ) : ''
}


export default Accounts
