let restaurant = {
    name: 'The place',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return (seatsLeft >= partySize)
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount += partySize
            return true
        } else {
            return false
        }
    },
    removeParty: function (partySize) {
        if (this.guestCount >= (partySize)) {
            this.guestCount -= partySize
            return true
        } else {
            return false
        }
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))