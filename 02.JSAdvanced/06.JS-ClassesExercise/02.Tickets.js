function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    Array.from(input).forEach((ticketInfo) => {
        let info = ticketInfo.split('|');
        let destination = info[0];
        let price = parseFloat(info[1]);
        let status = info[2];

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });
    return tickets = tickets.sort((a, b) => {
        if (a[criteria] < b[criteria]) {
            return -1;
        } else if (a[criteria] > b[criteria]) {
            return 1;
        }
        return 0;
    });
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));