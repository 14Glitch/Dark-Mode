// Esse dark-mode.js serve para salvar os cookies da página, ou seja, ficará salvo a cor padrão do site.

let darkMode = localStorage.getItem('darkMode'); 

// Verificação para quando alterar o switch, também alterar as configurações da página.

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');

  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
