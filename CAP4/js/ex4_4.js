const frm = document.querySelector('form');
const resp = document.querySelector('h2');

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const horaBra = Number(frm.hora.value);

    let horaFra = horaBra + 5;

    if (horaFra > 24) {
        horaFra = horaFra - 24;
    }

    resp.innerHTML = `O Horário é: ${horaFra.toFixed(2)}`;
});
