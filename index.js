function customPrint(n, message) {
    if (n > 0) {
        console.log(message);
        return customPrint(n - 1, message);
    } else {
        return n;
    }
}


customPrint(5, "Hello, World!");
