class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.currentBookingNumber = 1;
        this.bookings = [];
        this.sigleRoomsCount = Math.floor((50 / 100) * capacity);
        this.doubleRoomsCount = Math.floor((30 / 100) * capacity);
        this.maisonetteRoomsCount = Math.floor((20 / 100) * capacity)
    }

    get roomsPricing() {
        return [{
            single: 50
        }, { double: 90 }, { maisonette: 135 }]

    }
    get servicesPricing() {
        return [{
            food: 10
        }, { drink: 15 }, { housekeeping: 25 }]

    }

    rentARoom(clientName, roomType, nights) {
        //We check if we have rooms available
        switch (roomType) {
            case 'single':
                if (this.sigleRoomsCount == 0) {
                    return 'No ' + roomType + ' rooms available!! Available double rooms: ' + this.doubleRoomsCount + '. Available maisonette rooms: ' + this.maisonetteRoomsCount + '."'
                }
                break;
            case 'double':
                if (this.doubleRoomsCount == 0) {
                    return 'No ' + roomType + ' rooms available!! Available single rooms: ' + this.sigleRoomsCount + '. Available maisonette rooms: ' + this.maisonetteRoomsCount + '."'
                }
                break;
            case 'maisonette':
                if (this.maisonetteRoomsCount == 0) {
                    return 'No ' + roomType + ' rooms available!! Available single rooms: ' + this.sigleRoomsCount + '. Available double rooms: ' + this.doubleRoomsCount + '."'
                }
                break;
        }
        //We remove 1 room  from the free rooms count, depending on the type
        switch (roomType) {
            case 'single':
                this.sigleRoomsCount = this.sigleRoomsCount - 1;
                break;
            case 'double':
                this.doubleRoomsCount = this.doubleRoomsCount - 1;
                break;
            case 'maisonette':
                this.maisonetteRoomsCount = this.maisonetteRoomsCount - 1;
                break;
        }
        //We create annonymous object for the current booking
        let currentBooking = {
                clientName: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber,
                services: []
            }
            //We add the booking to the array of bookings
        this.bookings.push(currentBooking)
        var nmb = this.currentBookingNumber;
        this.currentBookingNumber = this.currentBookingNumber + 1;
        return 'Enjoy your time here Mr./Mrs. ' + clientName + '. Your booking is ' + nmb + '.'

    }
    roomService(currentBookingNumber, serviceType) {
        var currElement = this.bookings.find(x => x.roomNumber === currentBookingNumber);

        if (currElement == null) {
            return 'The booking ' + currentBookingNumber + ' is invalid';
        } else {

            if (serviceType != 'food' && serviceType != 'drink' && serviceType != 'housekeeping') {
                return 'We do not offer ' + serviceType + ' service.'

            } else {
                currElement.services.push(serviceType);
                return 'Mr./Mrs. ' + currElement.clientName + ', Your order for ' + serviceType + ' service has been successful.';
            }

        }
    }
    checkOut(currentBookingNumber) {
        let wantedBooking = this.bookings.find(x => x.roomNumber === currentBookingNumber);
        if (wantedBooking == null) {
            return 'The booking ' + currentBookingNumber + ' is invalid.'
        }
        let price = 50;
        if (wantedBooking.roomType = 'double') {
            price = 90;
            this.doubleRoomsCount = this.doubleRoomsCount + 1;
        } else if (wantedBooking.roomType = 'maisonette') {
            price = 135;
            this.maisonetteRoomsCount = this.maisonetteRoomsCount + 1;
        } else {
            this.sigleRoomsCount = this.sigleRoomsCount + 1;
        }
        let totalValue = wantedBooking.nights * price;
        let totalServiceMoney = 0;
        let services = wantedBooking.services;
        console.log(services);
        for (const s of services) {
            if (s === 'housekeeping') {
                totalServiceMoney += 25;
            }
            if (s === 'drink') {
                totalServiceMoney += 15;
            }
            if (s === 'food') {
                totalServiceMoney += 10;
            }
        }
        let totalM = totalServiceMoney + totalValue;
        if (wantedBooking.services.length < 1) {
            return 'We hope you enjoyed your time here, Mr./Mrs. ' + wantedBooking.clientName + '. The total amount of money you have to pay is ' + totalValue + ' BGN.'
        } else {

            return 'We hope you enjoyed your time here, Mr./Mrs. ' + wantedBooking.clientName + '.. The total amount of money you have to pay is ' + `${totalM} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`
        }


    }
    report() {
        let output = '';
        output += `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;

        for (const key in this.bookings) {

            if (this.bookings.hasOwnProperty(key)) {
                const element = this.bookings[key];

                output += `bookingNumber - ${element.roomNumber}\n`;
                output += `clientName - ${element.clientName }\n`;
                output += `roomType - ${element.roomType }\n`;
                output += `nights - ${element.nights }\n`;


                if (element.services.length > 0) {
                    output += `services: ${element.services.join(', ')}\n`;
                }
                output += `----------\n`;


            }
        }

        return output.trim().slice(0, -11);
    }

}
let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');
console.log(hotel.checkOut(3));
console.log(hotel.report());