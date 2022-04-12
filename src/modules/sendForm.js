const sendForm = () => {
  const form = document.querySelector("#formId");
  const formBtn = form.querySelector(".button");
  const statusBlock = document.createElement("span");
  const loadText = "Идёт отправка";
  const errorText = "Ошибка...";
  const successText = "Отправлено";
  const userName = form.querySelector('[name="fio"]');
  const userPhone = form.querySelector('[name="tel"]');

  statusBlock.style.cssText = "font-size: 18px; color: black; font-weight: bold;	font-family: 'Helios'; letter-spacing: 0.5px; text-transform: uppercase;";
  
  const validate = () => {
    let success = true;

    userName.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я]+/g, "");   
    });

    userPhone.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d\+]/g, "");      
    });
    
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json());
  };

  const sendForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;
          userName.value = "";
          userPhone.value = "";
          setTimeout(() => statusBlock.remove(), 1000);
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });
    } 
  };

  function redBorder(element){
    element.style.border = "2px solid red";
    setTimeout(() => {
      element.style.border = "";
    }, 2000);
  }

  formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (userName.value.length < 2) {
      redBorder(userName);
    } else if (userPhone.value == "") {
      redBorder(userPhone);
    } else {
      sendForm();
    }

  });

  validate();

};

export default sendForm;