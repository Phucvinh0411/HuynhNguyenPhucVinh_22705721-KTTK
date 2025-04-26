const Header = () => {
    return (
        <>
            <div className="flex items-center p-4   w-full justify-around h-[150px] bg-white">
                <img src="/banner.jpg" alt="IUH Logo" className="h-[150px] mr-4 ml-[100px]" />
                <div className="mr-[300px]">
                    <p className="font-bold text-blue-800 text-center">BỘ CÔNG THƯƠNG</p>
                    <h1 className="text-2xl font-extrabold text-blue-800">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
                    <p className="text-red-600 text-center">Đổi mới tư duy, làm giàu thêm tri thức - đổi sống</p>
                </div>
            </div>
        </>
    )
}
export default Header;