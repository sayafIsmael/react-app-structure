import {
    Link
} from "react-router-dom";

export default () => {
    return (
        <footer className="w-full bg-input-box py-14">
            <div className="container mx-auto">
                <div className="flex items-center">
                    <ul className="flex w-9/12">
                        <li className="mr-12 font-medium text-primary text-xl"><Link to="#">About</Link></li>
                        <li className="mr-12 font-medium text-primary text-xl"><Link to="#">Terms & Conditions</Link></li>
                        <li className="mr-12 font-medium text-primary text-xl"><Link to="#">Privacy Policy</Link></li>
                        <li className="mr-12 font-medium text-primary text-xl"><Link to="#">White Paper</Link></li>
                        <li className="font-medium text-primary text-xl"><Link to="#">Blog</Link></li>
                    </ul>
                    <ul className="flex w-3/12">
                        <li className="mr-5 font-medium text-primary text-xl"><Link to="#"><img alt="facebook" src="/images/facebook.png" /></Link></li>
                        <li className="mr-5 font-medium text-primary text-xl"><Link to="#"><img alt="twiter" src="/images/twiter.png" /></Link></li>
                        <li className="mr-5 font-medium text-primary text-xl"><Link to="#"><img alt="telegram" src="/images/telegram.png" /></Link></li>
                    </ul>
                </div>

                <div className="my-10">
                    <p className="w-10/12">1  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <p className="my-5">2  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
                    <p className="">2  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
                </div>
                <div className="default-spacing">
                    <div className="grid grid-cols-2 gap-5">
                        <p>© Copyright 2021 Structure Financial, Inc. All Rights Reserved.
                            Neither Elon Musk nor Tim Cook are customers of Structure Financial, Inc.
                            Zero-commission refers to $0 commissions for accounts that trade tokenized assets via mobile devices. Please see our Commission and Fee Schedule.
                            Structure Financial, Inc's services and STXR are not available in the United States and other prohibited jurisdictions.
                            This is not an offer, solicitation of an offer or advice to buy or sell securities, or open a brokerage account in any jurisdiction where Structure Financial, Inc. is not registered.
                            Structure Financial, Inc does not recommend any assets or securities. All investments involve risk and the past performance of an asset, security or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities or other financial products. Investors should consider their investment objectives and risks carefully before investing.
                            The above content is provided for general informational purposes only. It is not intended to constitute investment advice or any other kind of professional advice and should not be relied upon as such. Before taking action based on any such information, we encourage you to consult with the appropriate professionals. We do not endorse any third parties referenced within the article. Market and economic views are subject to change without notice and may be untimely when presented here. Do not infer or assume that any securities, sectors or markets described in this article were or will be profitable. Past performance is no guarantee of future results. There is a possibility of loss, including the complete loss of invested capital. Historical or hypothetical performance results are presented for illustrative purposes only.
                            Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors. These risks are to be assumed by the customer. For additional information on data provided within the App, please see our Data Disclosure.</p>
                        <p>Investors should consider the investment objectives and unique risk profile of Exchange Traded Funds (ETFs) carefully before investing. ETFs are subject to risks similar to those of other diversified portfolios. Leveraged and Inverse ETFs may not be suitable for all investors and may increase exposure to volatility through the use of leverage, short sales of securities, derivatives and other complex investment strategies.
                            Although ETFs are designed to provide investment results that generally correspond to the performance of their respective underlying indices, they may not be able to exactly replicate the performance of the indices because of expenses and other factors. A prospectus contains this and other information about the ETF and should be read carefully before investing. Customers should obtain prospectuses from issuers and/or their third party agents who distribute and make prospectuses available for review. ETFs are required to distribute portfolio gains to shareholders at year-end. These gains may be generated by portfolio rebalancing or the need to meet diversification requirements. ETF trading will also generate tax consequences. Additional regulatory guidance on Exchange Traded Products can be found by clicking here.
                            Third-party information provided for Structure Financial, Inc product features, Structure Financial, Inc communications and communications emanating from its social media community, market prices, data and other information available through Structure Financial, Inc are meant for informational purposes only and are not intended as an offer or solicitation for the purchase or sale of any financial instrument or as an official confirmation of any transaction. The information provided is not warranted as to completeness or accuracy and is subject to change without notice. The Structure Financial, Inc website provides its users' links to social media sites and email. The linked social media and email messages are pre-populated. However, these messages can be deleted or edited by Structure Financial, Inc users, who are under no obligation to send any pre-populated messages. Any comments or statements made herein do not reflect the views of Structure Financial, Inc or any of its subsidiaries or affiliates. Note that certain Structure Financial, Inc product features listed are currently in development and will be available soon. Structure Financial, Inc., may receive payment for order flow through third parties.
                            All assets, and investments are offered to self-directed customers by Structure Financial, Inc. Structure Financial Inc. is not a member of FINRA or SIPC. Additional information about Structure Financial, Inc. can be found by clicking here.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}