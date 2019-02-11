function solve(input) {

    let insertedCash = 0;
    let totalCashInATM = 0;
    let banknotes = [];
    input.forEach(element => {

        if (element.length > 2) {
            banknotes.push(...element);
            banknotes = banknotes.sort((a, b) => b - a);
            insertedCash = element.reduce((a, b) => a + b);
            totalCashInATM += insertedCash;
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);

        } else if (element.length === 2) {
            let currentAccBalance = element[0];
            let moneyToWithdraw = element[1];
            let accountBalance = currentAccBalance - +moneyToWithdraw;
            if (totalCashInATM < moneyToWithdraw) {
                console.log('ATM machine is out of order!');

            } else if (moneyToWithdraw <= currentAccBalance) {
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${accountBalance}$. Thank you!`);
                totalCashInATM -= moneyToWithdraw;

                for (let i = 0; i < banknotes.length; i++) {
                    if (moneyToWithdraw - banknotes[i] >= 0) {
                        moneyToWithdraw -= banknotes[i];
                        banknotes[i] = 0;

                    }
                }
                banknotes = banknotes.filter(x => x !== 0);
            } else {
                console.log(`Not enough money in your account. Account balance: ${currentAccBalance}$.`);

            }
        } else {

            let result = banknotes.filter(x => x === element[0]);
            console.log(`Service Report: Banknotes from ${element[0]}$: ${result.length}.`);

        }
    });
}
solve([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
])