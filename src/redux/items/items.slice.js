import { createSlice, nanoid } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [
            {
                id: nanoid(),
                title: "Big Mac",
                price: 2,
                image: "https://neal.fun/spend/images/big-mac.jpg"
            },
            {
                id: nanoid(),
                title: "Flip Flops",
                price: 3,
                image: "https://neal.fun/spend/images/flip-flops.jpg"
            },
            {
                id: nanoid(),
                title: "Coca-Cola Pack",
                price: 5,
                image: "https://neal.fun/spend/images/coca-cola-pack.jpg"
            },
            {
                id: nanoid(),
                title: "Movie Ticket",
                price: 12,
                image: "https://neal.fun/spend/images/movie-ticket.jpg"
            },
            {
                id: nanoid(),
                title: "Book",
                price: 15,
                image: "https://neal.fun/spend/images/book.jpg"
            },
            {
                id: nanoid(),
                title: "Lobster Dinner",
                price: 45,
                image: "https://neal.fun/spend/images/lobster-dinner.jpg"
            },
            {
                id: nanoid(),
                title: "Video Game",
                price: 60,
                image: "https://neal.fun/spend/images/video-game.jpg"
            },
            {
                id: nanoid(),
                title: "Amazon Echo",
                price: 99,
                image: "https://neal.fun/spend/images/amazon-echo.jpg"
            },
            {
                id: nanoid(),
                title: "Year of Netflix",
                price: 100,
                image: "https://neal.fun/spend/images/year-of-netflix.jpg"
            },
            {
                id: nanoid(),
                title: "Kitten",
                price: 1500,
                image: "https://neal.fun/spend/images/kitten.jpg"
            },
            {
                id: nanoid(),
                title: "Puppy",
                price: 1500,
                image: "https://neal.fun/spend/images/puppy.jpg"
            },
            {
                id: nanoid(),
                title: "Auto Rickshaw",
                price: 2300,
                image: "https://neal.fun/spend/images/auto-rickshaw.jpg"
            },
            {
                id: nanoid(),
                title: "Formula 1 Car",
                price: 15000000,
                image: "https://neal.fun/spend/images/formula-1-car.jpg"
            },
            {
                id: nanoid(),
                title: "Apache Helicopter",
                price: 31000000,
                image: "https://neal.fun/spend/images/apache-helicopter.jpg"
            },
            {
                id: nanoid(),
                title: "Mansion",
                price: 45000000,
                image: "https://neal.fun/spend/images/mansion.jpg"
            },
            {
                id: nanoid(),
                title: "Mansion",
                price: 100000000000,
                image: "https://neal.fun/spend/images/mansion.jpg"
            },
        ],
        cart: [],
        balance: 100000000000,
        cartTotal: 0
    },
    reducers: {
        buy: (state, action) => {
            const { id, title, price } = action.payload;

            state.balance = state.balance - parseInt(price);
            state.cartTotal = state.cartTotal + parseInt(price);

            if (state.cart.find(item => item.id === id)) {
                state.cart.find(item => item.id === id).piece++
            } else {
                state.cart.push({ id, title, price, piece: 1 });
            }
        },
        sell: (state, action) => {
            const { id, price } = action.payload;

            state.balance = state.balance + parseInt(price);
            state.cartTotal = state.cartTotal - parseInt(price);
            
            if (state.cart.find(item => item.id === id).piece > 1) {
                state.cart.find(item => item.id === id).piece--;
            } else {
                state.cart = state.cart.filter(item => item.id !== id)
            }

        },
    },
})


// Constant variables
export const items = (state) => state.items.items;
export const cart = (state) => state.items.cart;
export const cartTotal = (state) => state.items.cartTotal;
export const balance = (state) => state.items.balance;

// Export reducers
export const { buy, sell } = itemsSlice.actions;
export default itemsSlice.reducer;