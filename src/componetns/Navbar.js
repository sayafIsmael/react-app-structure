import {
    Link
} from "react-router-dom";

export default () => {
    return (
        <header>
            <div className='bg-primary w-full mx-auto flex justify-center items-center h-10'>
                <p className="text-base text-white">Get  no-fee trading for life when you sign up today</p>
                <img alt="" className="ml-2 my-auto" src="/images/arrow-right.svg" />
            </div>

            <nav className="nav-main">
                <div className="nav-main container mx-auto flex justify-between items-center">
                    <Link to="/" className="w-3/12">
                        <img alt="" src="/images/logo.png" />
                    </Link>

                    <ul className="flex text-center">
                        <li><Link to="#">All Assets</Link></li>
                        <li><Link to="#">Stocks </Link></li>
                        <li><Link to="#">Crypto </Link></li>
                        <li><Link to="#">Trade </Link></li>
                    </ul>

                    <div className='flex justify-end w-3/12'>
                        <div className="flex ml-auto">
                            <a className="nav-btn cursor-pointer mr-10 my-auto">Sign up</a>
                            <button className="btn-nav">Get the app</button>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}