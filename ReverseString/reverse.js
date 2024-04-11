//Write a recursive function to reverse a string.

function reverseHelper(str, index) {
    if (index >= str.length)
        return ""
    return reverseHelper(str, index + 1) + str[index]
}
function reverse(str) {
    return reverseHelper(str, 0)
}

console.log(reverse("javascript"))
console.log(reverse("developer"))