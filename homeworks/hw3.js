

const user = {
    name: "",
    age: 20,
    address: {
        city: "Berlin"
    },
    isAdmin: true
};

const userName = user.name || "کاربر مهمان";
console.log("نام کاربر:", userName);

user.isAdmin && console.log("این کاربر مدیر است.");

const city = user.address?.city || "شهر نامشخص";
console.log("شهر:", city);