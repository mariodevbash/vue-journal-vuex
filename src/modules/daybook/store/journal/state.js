export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio nostrum voluptatum culpa corrupti! Fugiat nisi dignissimos quisquam in autem! Veritatis, asperiores, odio officiis ullam iure reprehenderit vitae distinctio exercitationem dicta rem, earum quae numquam quia fugiat sequi? Itaque, architecto atque? Suscipit quisquam reiciendis animi maiores deserunt, nulla tempore dolorum?',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'in autem! Veritatis, asperiores, odio officiis ullam iure reprehenderit vitae distinctio exercitationem dicta rem, earum quae numquam quia fugiat sequi? Itaque, architecto atque? Suscipit quisquam reiciendis animi maiores deserunt, nulla tempore dolorum?',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'at nisi dignissimos quisquam in autem! Veritatis, asperiores, odio officiis ullam iure reprehenderit vitae Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio nostrum voluptatum culpa corrupti! Fugi distinctio exercitationem dicta rem, earum quae numquam quia fugiat sequi? Itaque, architecto atque? Suscipit quisquam reiciendis animi maiores deserunt, nulla tempore dolorum?',
            picture: null
        },
    ]
})