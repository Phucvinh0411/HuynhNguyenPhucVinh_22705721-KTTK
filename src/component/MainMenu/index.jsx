const MainMenu = () => {
    return (
        <>
            <nav className="bg-gray-400 text-white container">
                <div className="mx-auto flex justify-between items-center w-full text-blue-900 font-bold">
                    <ul className="flex space-x-8 items-center w-full h-10 text-xs">
                        <li className="p-2"><img src="/home.png" className="w-full h-full" alt="Home" /></li>
                        <li className="p-2"><a href="#">Giới thiệu</a></li>
                        <li className="p-2"><a href="#">Đào tạo</a></li>
                        <li className="p-2"><a href="#">Tuyển sinh</a></li>
                        <li className="p-2"><a href="#">Nghiên cứu</a></li>
                        <li className="p-2"><a href="#">Sinh viên</a></li>
                        <li className="p-2"><a href="#">Giảng viên</a></li>
                        <li className="p-2"><a href="#">Văn bằng</a></li>
                        <li className="p-2 ml-auto">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className="h-8 px-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default MainMenu;