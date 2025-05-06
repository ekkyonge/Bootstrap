console.log(document.title);

function inputData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  console.log(
    " Nama :" +
      name +
      "\n Email :" +
      email +
      "\n No. Hp :" +
      phone +
      "\n Subjek :" +
      subject +
      "\n Pesan :" +
      message
  );

  alert(
    " Nama :" +
      name +
      "\n Email :" +
      email +
      "\n No. Hp :" +
      phone +
      "\n Subjek :" +
      subject +
      "\n Pesan :" +
      message
  );
}
