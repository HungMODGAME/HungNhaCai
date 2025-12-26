let balance = 10000;

function play(choice) {
    const betAmount = parseInt(document.getElementById('bet-amount').value);
    
    if (betAmount > balance) {
        alert("Bạn không đủ Gold!");
        return;
    }

    // Lắc 3 viên xí ngầu ngẫu nhiên từ 1-6
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const total = d1 + d2 + d3;
    
    // Hiển thị kết quả lên màn hình
    const diceDivs = document.querySelectorAll('.dice');
    diceDivs[0].innerText = d1;
    diceDivs[1].innerText = d2;
    diceDivs[2].innerText = d3;

    // Xác định kết quả Tài hay Xỉu
    let result = "";
    if (total >= 4 && total <= 10) result = "Xiu";
    else if (total >= 11 && total <= 17) result = "Tai";

    // Xử lý thắng thua
    const resultText = document.getElementById('result-text');
    if (choice === result) {
        balance += betAmount;
        resultText.innerText = `KẾT QUẢ: ${total} - BẠN THẮNG!`;
        resultText.style.color = "#2ecc71";
    } else {
        balance -= betAmount;
        resultText.innerText = `KẾT QUẢ: ${total} - BẠN THUA!`;
        resultText.style.color = "#e74c3c";
    }

    // Cập nhật lại số dư và lịch sử
    document.getElementById('balance').innerText = balance;
    updateHistory(total, result);
}

function updateHistory(total, result) {
    const log = document.getElementById('history-log');
    const entry = document.createElement('p');
    entry.innerText = `Tổng: ${total} (${result})`;
    log.prepend(entry);
}