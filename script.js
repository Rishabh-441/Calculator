const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        // console.log(e.target.innerText);
        if (btnText === "C") {
            screen.value = "";
            return;
        }
        if (btnText === '=') {
            solve(screen.value).then((ans) => {
                screen.value = ans;
            }).catch(() => {
                screen.value = "Invalid Expression";
                screen.style.color = 'red';
            })
        }
        if (screen.value === "Invalid Expression") {
            screen.value = '';
            screen.style.color = 'black';
        }
        if (btnText === 'x') {
            screen.value += '*';
        }
        else
            screen.value += btnText;
    })
}

function solve(exp) {
    return new Promise((res, rej) => {
        let ans = eval(exp);
        res(ans);
    })
}