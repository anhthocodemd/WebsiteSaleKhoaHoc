// =======================
// Dữ liệu khóa học
// =======================

const courses = [
    {
        id: 1,
        title: "Frontend từ Zero đến Hero với HTML, CSS, JavaScript",
        code: "WED201c",
        price: 200000,
        desc: "Khóa học nền tảng giúp học viên nắm vững HTML, CSS và JavaScript – những công nghệ quan trọng nhất để xây dựng website. Bạn sẽ được luyện tập qua nhiều bài tập thực hành, mini project và học các kỹ thuật làm giao diện hiện đại, responsive.",
        topics: [
            "Cấu trúc HTML – semantic",
            "Thiết kế giao diện với CSS – Flexbox – Grid",
            "Responsive Web Design",
            "JavaScript DOM & sự kiện",
            "Khóa học bao gồm đầy đủ bài tập và Source Code"
        ]
    },

    {
        id: 2,
        title: "Ngôn Ngữ Lập Trình C",
        code: "PRF192",
        price: 150000,
        desc: "Khóa học lập trình C dành cho người mới bắt đầu theo chuẩn chương trình Đại học FPT. Giúp học viên hình thành tư duy lập trình, hiểu rõ biến – hàm – mảng – con trỏ và cách giải quyết bài toán bằng thuật toán.",
        topics: [
            "Biến – kiểu dữ liệu – toán tử",
            "Cấu trúc điều khiển",
            "Hàm & truyền tham số",
            "Mảng – chuỗi – con trỏ",
            "Bài tập thực hành cuối môn",
            "Khóa học bao gồm đầy đủ bài tập và Source Code"
        ]
    },

   {
    id: 3,
    title: "Java OOP",
    code: "PRO192",
    price: 150000,
    desc: "Khóa học Java OOP cung cấp nền tảng vững chắc về lập trình hướng đối tượng – một trong những kỹ năng quan trọng nhất của lập trình viên Java. Đây là môn học bắt buộc và cũng là tiền đề trực tiếp để học tốt LAB211. Nếu nắm vững PRO192, bạn sẽ dễ dàng xử lý bài tập, hiểu cấu trúc chương trình và triển khai các mô hình hướng đối tượng ở cấp độ cao hơn.",
    topics: [
        "Tạo và sử dụng Class – Object",
        "Thuộc tính – phương thức – phạm vi truy cập",
        "Kế thừa và tái sử dụng mã nguồn",
        "Đa hình, nạp chồng – ghi đè phương thức",
        "Abstract class – Interface",
        "Khóa học bao gồm đầy đủ bài tập và Source Code"
    ],
    note: "⚠️ LƯU Ý QUAN TRỌNG: PRO192 là môn nền tảng bắt buộc để học tốt LAB211. Nếu nắm chắc OOP trong PRO192, bạn sẽ giảm 70% độ khó của LAB211."
},


    {
        id: 4,
        title: "Cơ Sở Dữ Liệu SQL",
        code: "DBI202",
        price: 200000,
        desc: "Khóa học SQL giúp bạn truy vấn, quản lý và tối ưu dữ liệu trong hệ quản trị cơ sở dữ liệu quan hệ. Đây là kỹ năng cần thiết cho lập trình viên, tester, data analyst và bất kỳ ai làm việc với dữ liệu.",
        topics: [
            "SELECT – INSERT – UPDATE – DELETE",
            "JOIN nhiều bảng",
            "Stored Procedure & Function",
            "Indexing – tối ưu truy vấn"
        ]
    },

    {
        id: 5,
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        code: "CSD201",
        price: 200000,
        desc: "Khóa học giúp học viên tối ưu tư duy thuật toán, hiểu cách lưu trữ và xử lý dữ liệu hiệu quả. Phù hợp cho sinh viên CNTT muốn nâng cao khả năng giải quyết vấn đề và chuẩn bị cho phỏng vấn lập trình.",
        topics: [
            "Linked List – cấu trúc danh sách",
            "Stack – Queue và ứng dụng",
            "Các thuật toán sắp xếp phổ biến",
            "Đệ quy – chia để trị"
        ]
    },

{
    id: 6,
    title: "Java OOP (Lab)",
    code: "LAB211 (MEET)",
    price: 250000,
    desc: "LAB211 là môn thực hành quan trọng và cũng là một trong những môn học 'khó' trong chương trình Java căn bản. Môn học yêu cầu sinh viên vận dụng toàn bộ kiến thức OOP đã học trong PRO192",
    topics: [
        "Ôn tập OOP nâng cao: Class – Object – Encapsulation",
        "Thiết kế chương trình từ yêu cầu bài toán",
        "Xử lý dữ liệu, validation, exception handling",
        "Xây dựng ứng dụng console hoàn chỉnh",
        "Review code – hướng dẫn sửa lỗi 1 kèm 1",
        "Thực hành bài Lab lớn theo yêu cầu chuẩn FPT"
    ],
    note: "⚠️ CHÚ Ý: LAB211 là môn cực kỳ quan trọng và có độ khó cao. Bạn sẽ được hướng dẫn 1 kèm 1, được review từng phần code, giải thích lỗi, chỉnh sửa thiết kế chương trình. Môn này yêu cầu bạn nắm chắc PRO192 – nếu không sẽ rất khó hoàn thành bài Lab."
},

    {
        id: 7,
        title: "Toán Cao Cấp",
        code: "MAE101",
        price: 150000,
        desc: "Khóa học trang bị kiến thức toán cao cấp: đạo hàm, tích phân, giới hạn, chuỗi số – nền tảng quan trọng cho các môn thuộc khoa học máy tính, kỹ thuật và AI.",
        topics: [
            "Giới hạn & liên tục",
            "Đạo hàm và ứng dụng",
            "Tích phân cơ bản",
            "Chuỗi số & dãy số",
            "Bài tập vận dụng nâng cao"
        ]
    },

    {
        id: 8,
        title: "Toán Rời Rạc",
        code: "MAD101",
        price: 150000,
        desc: "Khóa học cung cấp kiến thức toán rời rạc – nền tảng quan trọng trong thuật toán, cấu trúc dữ liệu, AI và lập trình nâng cao. Phù hợp cho sinh viên IT hoặc người muốn củng cố tư duy logic.",
        topics: [
            "Logic – mệnh đề – tập hợp",
            "Quan hệ & hàm",
            "Đồ thị – cây nhị phân",
            "Đếm – hoán vị – tổ hợp",
            "Ứng dụng trong thuật toán"
        ]
    },

    {
        id: 9,
        title: "Thống kê và xác suất",
        code: "MAS291",
        price: 150000,
        desc: "Khóa học toán thống kê – xác suất ứng dụng, rất quan trọng trong Data Science, Machine Learning và phân tích dữ liệu. Cung cấp kiến thức nền tảng để xử lý dữ liệu thực tế.",
        topics: [
            "Xác suất cơ bản & biến ngẫu nhiên",
            "Phân phối xác suất",
            "Thống kê mô tả",
            "Ước lượng – kiểm định",
            "Phân tích dữ liệu thực tế"
        ]
    },

    {
    id: 10,
    title: "Thiết kế Slide Thuyết Trình Chuyên Nghiệp",
    code: "SV001",
    price: 70000,
    desc: "Dịch vụ thiết kế slide chuyên nghiệp dành cho sinh viên và doanh nghiệp. Slide được thiết kế hiện đại, khoa học, tối ưu để thuyết trình hoặc bảo vệ đồ án. Bao gồm chỉnh sửa nội dung, icon, màu sắc và hiệu ứng.",
    topics: [
        "Thiết kế slide PowerPoint/Google Slide",
        "Phong cách hiện đại – tối giản – doanh nghiệp",
        "Chèn icon, hình minh họa, biểu đồ",
        "Format lại nội dung cho dễ hiểu",
        "Chỉnh sửa miễn phí 1–2 lần"
    ],
    note: "Dịch vụ phù hợp cho bài tập lớn, đồ án, pitch deck startup, thuyết trình nhóm."
},

{
    id: 11,
    title: "Dịch vụ Edit Video Theo Yêu Cầu",
    code: "SV002",
    price: 150000, // bạn có thể đổi giá
    desc: "Dịch vụ edit video chuyên nghiệp bởi LUK Global: cắt ghép, chèn hiệu ứng, sửa âm thanh, chỉnh màu và thêm phụ đề. Phù hợp cho video thuyết trình, bài tập lớn, giới thiệu sản phẩm hoặc video viral mạng xã hội.",
    topics: [
        "Cắt ghép video chuyên nghiệp",
        "Chèn hiệu ứng – template hiện đại",
        "Thêm nhạc nền phù hợp",
        "Chèn phụ đề tiếng Việt/Anh",
        "Xuất file Full HD / 4K"
    ],
    note: "Dịch vụ hỗ trợ edit video cho final project, video TikTok/Reels, video thuyết trình môn học."
},
    
];


// =======================
// Render chi tiết khóa học
// =======================

function getCourseId() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

function formatPrice(amount) {
    return amount.toLocaleString("vi-VN") + "₫";
}

document.addEventListener("DOMContentLoaded", () => {
    const id = getCourseId();
    const course = courses.find(c => c.id === id);

    const container = document.getElementById("courseDetail");

    if (!course) {
        container.innerHTML = `<p>Không tìm thấy khóa học.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="detail-card">

            <h1 class="detail-title">${course.title}</h1>
            <p class="detail-code">Mã môn: ${course.code}</p>

            <p class="detail-desc">${course.desc}</p>

            <h3>Nội dung khóa học:</h3>
            <ul class="detail-topics">
                ${course.topics.map(t => `<li>✔ ${t}</li>`).join("")}
            </ul>

            <div class="detail-bottom">
                <div class="detail-price">${formatPrice(course.price)}</div>

                <a href="index.html" class="btn btn-outline">Quay lại</a>
            </div>
        </div>
    `;

    // Render năm footer
    document.getElementById("year").textContent = new Date().getFullYear();
});
