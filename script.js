/* ============================================
   DỮ LIỆU KHÓA HỌC / DỊCH VỤ
================================================ */

const courses = [
    {
        id: 1,
        title: "Frontend từ Zero đến Hero với HTML, CSS, JavaScript",
        code: "WED201c",
        price: 200000,
    },
    {
        id: 2,
        title: "Ngôn Ngữ Lập Trình C",
        code: "PRF192",
        price: 150000,
    },
    {
        id: 3,
        title: "Java OOP",
        code: "PRO192",
        price: 150000,
    },
    {
        id: 4,
        title: "Cơ Sở Dữ Liệu SQL từ cơ bản đến nâng cao",
        code: "DBI202",
        price: 200000,
    },
    {
        id: 5,
        title: "Cấu Trúc Dữ Liệu và Giải Thuật",
        code: "CSD201",
        price: 200000,
    },
    {
        id: 6,
        title: "Java OOP (Lab)",
        code: "LAB211",
        price: 250000,
    },
    {
        id: 7,
        title: "Toán Cao Cấp",
        code: "MAE101",
        price: 150000,
    },
    {
        id: 8,
        title: "Toán Rời Rạc",
        code: "MAD101",
        price: 150000,
    },
    {
        id: 9,
        title: "Thống kê và xác suất",
        code: "MAS291",
        price: 150000,
    },
    {
        id: 10,
        title: "Thiết kế Slide Thuyết Trình Chuyên Nghiệp",
        code: "SV001",
        price: 100000,
    },
    {
        id: 11,
        title: "Dịch vụ Edit Video Theo Yêu Cầu",
        code: "SV002",
        price: 150000,
    },
];

/* ============================================
   HỖ TRỢ
================================================ */

function formatPrice(amount) {
    return amount.toLocaleString("vi-VN") + "₫";
}

/* ============================================
   RENDER NHÓM MÔN / DỊCH VỤ
================================================ */

function renderCourses() {
    const courseList = document.getElementById("courseListCourses");
    const serviceList = document.getElementById("courseListServices");

    courseList.innerHTML = "";
    serviceList.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card " + (course.code.startsWith("SV") ? "service-card" : "");

        card.innerHTML = `
            <div class="course-header">
                <span class="course-code">${course.code}</span>
            </div>

            <h3 class="course-title">${course.title}</h3>

            <div class="course-bottom">
                <div class="price">${formatPrice(course.price)}</div>

                <div class="btn-group">
                    <a href="course.html?id=${course.id}" class="btn btn-outline">Chi tiết</a>
                    <button class="btn btn-primary" data-add="${course.id}">Thêm</button>
                </div>
            </div>
        `;

        if (course.code.startsWith("SV")) serviceList.appendChild(card);
        else courseList.appendChild(card);
    });
}

/* ============================================
   GIỎ HÀNG
================================================ */

let cart = [];

function addToCart(id) {
    if (!cart.includes(id)) cart.push(id);
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item !== id);
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").textContent = cart.length;
    renderCartItems();
}

function renderCartItems() {
    const cartItems = document.getElementById("cartItems");
    const emptyMsg = document.getElementById("cartEmptyMessage");
    const totalEl = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        totalEl.textContent = "0₫";
        return;
    }

    emptyMsg.style.display = "none";

    let total = 0;

    cart.forEach(id => {
        const course = courses.find(c => c.id === id);

        total += course.price;

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <div>
                <strong>${course.code}</strong> — ${course.title}
            </div>

            <div style="text-align:right;">
                <div>${formatPrice(course.price)}</div>
                <button class="cart-item-remove" data-remove="${course.id}">Xóa</button>
            </div>
        `;

        cartItems.appendChild(item);
    });

    totalEl.textContent = formatPrice(total);
}

/* ============================================
   MODAL CART
================================================ */

function openCart() {
    document.getElementById("cartModal").classList.add("open");
}

function closeCart() {
    document.getElementById("cartModal").classList.remove("open");
}

/* ============================================
   KHỞI TẠO TRANG
================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // Render năm footer
    if (document.getElementById("year"))
        document.getElementById("year").textContent = new Date().getFullYear();

    renderCourses();
    updateCart();

    document.getElementById("cartBtn").onclick = openCart;
    document.getElementById("cartCloseBtn").onclick = closeCart;

    document.getElementById("cartModal").onclick = (e) => {
        if (e.target.id === "cartModal") closeCart();
    };

    // Sự kiện thêm môn (cho cả 2 danh sách)
    function handleAdd(e) {
        if (e.target.dataset.add) {
            addToCart(Number(e.target.dataset.add));
        }
    }

    document.getElementById("courseListCourses").onclick = handleAdd;
    document.getElementById("courseListServices").onclick = handleAdd;

    // Xóa khỏi giỏ
    document.getElementById("cartItems").onclick = (e) => {
        if (e.target.dataset.remove) {
            removeFromCart(Number(e.target.dataset.remove));
        }
    };

    /* ============================================
       THANH TOÁN QR + GỬI GOOGLE SHEETS
    ============================================ */

    document.getElementById("checkoutBtn").onclick = () => {
        if (cart.length === 0) return alert("Giỏ hàng đang trống!");

        const total = cart.reduce((sum, id) => {
            const c = courses.find(x => x.id === id);
            return sum + (c ? c.price : 0);
        }, 0);

        document.getElementById("qrTotal").textContent = formatPrice(total);
        document.getElementById("qrEmailInput").value = "";
        document.getElementById("qrSuccess").style.display = "none";

        document.getElementById("qrModal").classList.add("open");
    };

    document.getElementById("qrCloseBtn").onclick = () => {
        document.getElementById("qrModal").classList.remove("open");
    };

    document.getElementById("qrModal").onclick = (e) => {
        if (e.target.id === "qrModal")
            document.getElementById("qrModal").classList.remove("open");
    };

    // XÁC NHẬN THANH TOÁN
    document.getElementById("qrConfirmBtn").onclick = () => {
        const email = document.getElementById("qrEmailInput").value.trim();
        if (!email || !email.includes("@")) return alert("Vui lòng nhập email hợp lệ!");

        const total = cart.reduce((sum, id) => {
            const c = courses.find(x => x.id === id);
            return sum + (c ? c.price : 0);
        }, 0);

        const SHEET_API_URL =
            "https://script.google.com/macros/s/AKfycbwmjJ0l1UJwzfeFmiH0RugRQdMB7FCrQQjgC2GeMSmdFnAs1b2BEIOgC2dAQYjRK7M0vg/exec";

        fetch(SHEET_API_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                total: total,
                cart: cart
            })
        });

        document.getElementById("qrSuccess").style.display = "block";

        cart = [];
        updateCart();

        setTimeout(() => {
            document.getElementById("qrModal").classList.remove("open");
        }, 1500);
    };
});
