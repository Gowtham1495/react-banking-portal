import React from 'react';


export default function Dashboard(props) {
    return (
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
            </div>
        </main>
    )
}
