// // 1. Sum of Prime Numbers between 20 and 150

// total1 = 0

// for num1 in range(20, 151):
//     factors1 = 0

//     for div1 in range(1, num1 + 1):
//         if num1 % div1 == 0:
//             factors1 = factors1 + 1

//     if factors1 == 2:
//         total1 = total1 + num1

// print("Sum of prime numbers:", total1)


// //2. Average of Perfect Numbers between 1 and 1000

// total2 = 0
// perfect_count2 = 0

// for num2 in range(1, 1001):
//     divisor_sum2 = 0

//     for div2 in range(1, num2):
//         if num2 % div2 == 0:
//             divisor_sum2 = divisor_sum2 + div2

//     if divisor_sum2 == num2:
//         total2 = total2 + num2
//         perfect_count2 = perfect_count2 + 1

// print("Average of perfect numbers:", total2 / perfect_count2)

// // 3. Leap Years between 1900 and 2026

// for year3 in range(1900, 2027):
//     if year3 % 400 == 0 or (year3 % 4 == 0 and year3 % 100 != 0):
//         print(year3)


// //4. Palindrome Numbers between 100 and 500

// for num4 in range(100, 501):
//     original4 = num4
//     reverse4 = 0
//     temp4 = num4

//     while temp4 != 0:
//         digit4 = temp4 % 10
//         reverse4 = reverse4 * 10 + digit4
//         temp4 = temp4 // 10

//     if original4 == reverse4:
//         print(original4)


// //5. Numbers whose Digit Sum is 10

// for num5 in range(120, 851):
//     temp5 = num5
//     digit_sum5 = 0

//     while temp5 != 0:
//         digit5 = temp5 % 10
//         digit_sum5 = digit_sum5 + digit5
//         temp5 = temp5 // 10

//     if digit_sum5 == 10:
//         print(num5)


// // 6. Pairs with Target Sum 30

// for first6 in range(1, 51):
//     for second6 in range(first6 + 1, 51):
//         if first6 + second6 == 30:
//             print(first6, second6)

// // 7. Numbers with Exactly 3 Factors

// for num7 in range(10, 301):
//     factor_count7 = 0

//     for div7 in range(1, num7 + 1):
//         if num7 % div7 == 0:
//             factor_count7 = factor_count7 + 1

//     if factor_count7 == 3:
//         print(num7)


// //8. Prime Factors of Every Number between 20 and 50

// for num8 in range(20, 51):
//     print("Prime factors of", num8, ":", end=" ")

//     for div8 in range(2, num8 + 1):
//         prime_count8 = 0

//         for check8 in range(1, div8 + 1):
//             if div8 % check8 == 0:
//                 prime_count8 = prime_count8 + 1

//         if prime_count8 == 2 and num8 % div8 == 0:
//             print(div8, end=" ")

//     print()


// // 9. Armstrong Numbers between 100 and 999

// for num9 in range(100, 1000):
//     original9 = num9
//     temp9 = num9
//     cube_sum9 = 0

//     while temp9 != 0:
//         digit9 = temp9 % 10
//         cube_sum9 = cube_sum9 + digit9 ** 3
//         temp9 = temp9 // 10

//     if cube_sum9 == original9:
//         print(original9)


// // 10. Number with Maximum Factors between 50 and 150

// maximum9 = 0
// number9 = 0

// for num10 in range(50, 151):
//     factor_count10 = 0

//     for div10 in range(1, num10 + 1):
//         if num10 % div10 == 0:
//             factor_count10 = factor_count10 + 1

//     if factor_count10 > maximum9:
//         maximum9 = factor_count10
//         number9 = num10

// print("Number:", number9)
// print("Maximum factors:", maximum9)