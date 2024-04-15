#program that prints "fizz" for numbers divisible by 3, "buzz" for numbers divisible by 5, and "fizzbuzz" for numbers divisible by both 3 and 5:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FizzBuzz Program</title>
</head>
<body>
    <script>
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    </script>
</body>
</html>
