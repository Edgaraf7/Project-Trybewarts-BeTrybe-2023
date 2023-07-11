const isValidEmail = () => {
    const email = document.getElementById('email-input');
    return email.value === 'tryber@teste.com';
  }
  
  const isValidPassword = () => {
    const password = document.getElementById('password-input');
    return password.value === '123456';
  }
  
  const loginSuccess = () => {
    alert('Olá, Tryber!');
  }
  
  const loginFail = () => {
    alert('Email ou senha inválidos.');
  }
  
  const validateForm = () => {
    if (isValidEmail() && isValidPassword()) {
      loginSuccess();
    } else {
      loginFail();
    }
  }
  
  const addFormEvents = () => {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', () => {
      validateForm();
    });
  }
  
  const addAgreementEvent = () => {
    const agreement = document.getElementById('agreement');
    agreement.addEventListener('input', (evt) => {
      const submitButton = document.getElementById('submit-btn');
      submitButton.disabled = !evt.target.checked;
    });
  }
  
  const addCommentEvents = () => {
    const textarea = document.getElementById('textarea');
    const counter = document.getElementById('counter');
    textarea.addEventListener('input', (evt) => {
      const target = evt.currentTarget;
      const maxLength = target.getAttribute('maxlength');
      const currentLength = target.value.length;
      counter.innerText = `${maxLength - currentLength}`;
    });
  }
  
  const createParagraph = (prefix, value) => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = `${prefix} ${value}`;
    return newParagraph;
  }
  
  const replaceFullname = () => {
    const nameInput = document.getElementById('input-name');
    const lastnameInput = document.getElementById('input-lastname');
    return createParagraph('Nome:', `${nameInput.value} ${lastnameInput.value}`);
  }
  
  const replaceEmail = () => {
    const emailInput = document.getElementById('input-email');
    return createParagraph('Email:', emailInput.value);
  }
  
  const replaceHouse = () => {
    const house = document.getElementById('house');
    return createParagraph('Casa:', house.value);
  }
  
  const replaceFamily = () => {
    const family = document.querySelector('input[name="family"]:checked');
    return createParagraph('Família:', family.value);
  }
  
  const createContentValue = (idsList) => {
    const contentValueList = [];
    for (let i = 0; i < idsList.length; i += 1) {
      const element = document.getElementById(idsList[i]);
      if (element.checked) contentValueList.push(element.value);
    }
    return contentValueList.join(', ');
  }
  
  const replaceContent = () => {
    return createParagraph('Matérias:', createContentValue([
      'hofs',
      'jest',
      'promises',
      'react',
      'sql',
      'python',
    ]));
  }
  
  const replaceRate = () => {
    const rate = document.querySelector('input[name="rate"]:checked');
    return createParagraph('Avaliação:', rate.value);
  }
  
  const replaceComment = () => {
    const comment = document.getElementById('textarea');
    return createParagraph('Observações:', comment.value);
  }
  
  const clearForm = () => {
    const form = document.getElementById('evaluation-form');
    form.innerHTML = '';
  }
  
  const appendToForm = (argsList) => {
    const form = document.getElementById('evaluation-form');
    for (let i = 0; i < argsList.length; i += 1) {
      form.appendChild(argsList[i]);
    }
  }
  
  const replaceForm = () => {
    const fullName = replaceFullname();
    const email = replaceEmail();
    const house = replaceHouse();
    const family = replaceFamily();
    const content = replaceContent();
    const rate = replaceRate();
    const comment = replaceComment();
    clearForm();
    appendToForm([
      fullName,
      email,
      house,
      family,
      content,
      rate,
      comment,
    ]);
  }
  
  const addSubmitButtonEvents = () => {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceForm();
    });
  }
  
  window.onload = () => {
    addFormEvents();
    addAgreementEvent();
    addCommentEvents();
    addSubmitButtonEvents();
  };
  