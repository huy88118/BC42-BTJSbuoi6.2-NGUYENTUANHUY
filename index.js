// bài 5 : In các số nguyên tố từ 1 => giá trị nhập vào

document.getElementById("bai5").onclick = function () {
    document.getElementById("result5").innerHTML = " ";
    let n = +document.getElementById("number_n").value;
    let k = true;
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          k = false;
        }
      }
      if (k == true) {
        document.getElementById("result5-wrapper").style.display = "block";
        document.getElementById("result5").innerHTML += i + " ";
      }
      k = true;
    }
  };
  