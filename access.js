(() => {
  const form = document.getElementById('access-form');
  const input = document.getElementById('access-phone');
  const message = document.getElementById('access-message');
  const screen = document.getElementById('access-screen');
  const button = form.querySelector('button');
  const load = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.append(script);
  });
  input.addEventListener('input', () => {
    input.removeAttribute('aria-invalid');
    message.textContent = '';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (button.disabled) return;
    const phone = input.value.trim();
    if (phone !== '13410007430') {
      message.textContent = !/^\d{11}$/.test(phone)
        ? '请输入11位手机号。'
        : '手机号未通过验证，请检查后重试。';
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }
    button.disabled = true;
    button.textContent = '正在打开地图…';
    input.value = '';
    try {
      await load('./config.js');
      await load('./data.js');
      const content = document.getElementById('map-content').content.cloneNode(true);
      screen.hidden = true;
      document.body.append(content);
      await load('./app.js');
      const heading = document.querySelector('header h1');
      heading.tabIndex = -1;
      heading.focus();
    } catch {
      document.querySelector('body > header')?.remove();
      document.querySelector('body > main')?.remove();
      screen.hidden = false;
      message.textContent = '地图加载失败，请检查网络后重新输入。';
      button.disabled = false;
      button.textContent = '验证并进入';
      input.focus();
    }
  });
})();
