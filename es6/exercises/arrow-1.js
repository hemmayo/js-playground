const lists = Array.from(document.querySelectorAll('[data-time]'))
const filtered = lists.filter((item) => item.textContent.includes('flexbox')).map(item => item.dataset.time)

