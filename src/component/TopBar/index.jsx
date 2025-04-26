import "./style.css";
const TopBar = () => {
    return (
        <>
            <div className="bg-blue-900 text-white text-sm flex justify-around p-2 space-x-4 menu-top">
                <div className="menu-left">
                    <span className="m-2">E-OFFICE</span>
                    <span className="m-2">EMAIL</span>
                    <span className="m-2">THƯ VIỆN - THÔNG TIN</span>
                </div>
                <div className="contact flex items-center justify-around">
                    <span className="m-2">KẾT NỐI</span>
                    <span className="m-2">VN-GB</span>
                    <img src="/coVN.png" className="w-[30px] h-[30px] mr-4" alt="noo" />
                    <img src="/coMy.png" alt="nppp" className="w-[30px] h-[30px]" />
                </div>

                <img className="banner" src="/banner.jpg" alt="nô" srcset="" />
            </div>
        </>
    )
}
export default TopBar;