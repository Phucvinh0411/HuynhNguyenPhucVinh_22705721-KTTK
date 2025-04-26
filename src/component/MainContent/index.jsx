const MainContent = () => {
    return (
        <>
            <section className="bg-blue-800 text-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4 container">
      {/* Phân hiệu Quảng Ngãi */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-2">PHÂN HIỆU QUẢNG NGÃI</h3>
        <img 
          src="https://i.ytimg.com/vi/cGz2a7ccAs0/maxresdefault.jpg" 
          alt="Phân hiệu Quảng Ngãi" 
          className="w-full h-40 object-cover rounded"
        />
      </div>

      {/* Cơ sở Thanh Hóa */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-2">CƠ SỞ THANH HÓA</h3>
        <img 
          src="https://i.ytimg.com/vi/cGz2a7ccAs0/maxresdefault.jpg" 
          alt="Cơ sở Thanh Hóa" 
          className="w-full h-40 object-cover rounded"
        />
      </div>

      {/* Video và Hình ảnh */}
      <div className="flex flex-col relative">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold mb-2">VIDEO VÀ HÌNH ẢNH</h3>
          <a 
            href="#"
            className="text-xs bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition"
          >
            xem tất cả
          </a>
        </div>
        {/* Video embed */}
        <div className="relative w-full h-40">
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>

        </>
    )
}
export default MainContent;