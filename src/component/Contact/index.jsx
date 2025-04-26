const Contact = () => {
    return (
        <>
            <footer className="bg-white border-t mt-8 p-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700 container">
                {/* Cột 1: Liên hệ */}
                <div>
                    <h3 className="font-bold text-red-700 mb-3">LIÊN HỆ</h3>
                    <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
                    <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
                    <p>Điện thoại: 028 3940 390 - 100</p>
                    <p>Tuyển sinh: 028 3985 1932 - 028 3895 5858 - 028 3985 1917</p>
                    <p>Email: dhcn@iuh.edu.vn</p>
                </div>
                {/* Cột 2: Hoạt động khác */}
                <div>
                    <h3 className="font-bold text-red-700 mb-3">HOẠT ĐỘNG KHÁC</h3>
                    <ul className="space-y-2">
                        <li>Hoạt động phục vụ cộng đồng</li>
                        <li>Sinh viên tình nguyện</li>
                        <li>CLB/Đội/Nhóm sinh viên</li>
                        <li>Kết nối doanh nghiệp</li>
                    </ul>
                </div>
                {/* Cột 3: Thông tin mở rộng */}
                <div>
                    <h3 className="font-bold text-red-700 mb-3">THÔNG TIN MỞ RỘNG</h3>
                    <ul className="space-y-2">
                        <li>Báo chí viết về IUH</li>
                        <li>Khám phá IUH</li>
                        <li>Kỹ năng mềm</li>
                        <li>Bộ sưu tập</li>
                        <li>Dịch vụ sinh viên</li>
                    </ul>
                </div>
                {/* Cột 4: Văn bản tiện ích */}
                <div>
                    <h3 className="font-bold text-red-700 mb-3">VĂN BẢN TIỆN ÍCH</h3>
                    <ul className="space-y-2">
                        <li>Quy chế - Quy định - Quy trình</li>
                        <li>Ba công khai</li>
                        <li>Biểu mẫu đào tạo</li>
                        <li>Quản lý khoa học</li>
                        <li>Phản hồi</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Contact;