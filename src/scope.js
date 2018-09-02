// ES5 中作用域

((function() {
    const foo = function() {
        return 12
    }
    console.log("foo()===12", foo() === 12);
    ((function() {
        const foo = function() {
            return 2
        }
        console.log("foo()===2", foo() === 2)
    })())
})())

{
    function foo() {
        return 1
    }

    console.log("foo()===1", foo() === 1)
    {
        function foo() {
            return 2
        }

        console.log("foo()===2", foo() === 2)
    }
    console.log("foo()===1", foo() === 1)
}
