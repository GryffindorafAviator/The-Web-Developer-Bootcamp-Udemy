<!DOCTYPE html>

<head>
    <title>Inline Events</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1 onclick="console.log('boo')">Inline Events Suck...</h1>
    <button id="btn" onclick="console.log('clicked')">Click Me</button>
</body>

</html>
