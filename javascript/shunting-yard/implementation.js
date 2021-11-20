// Reverse Polish Algorithm
// Here is the psedocode of the algorithm:
//
// 1. For all the input tokens:
//      1. Read the next token
//      2. If token is an operator (x)
//          1. While there is an operator (y) at the top of the operators stack and either (x) is left-associative 
//             and its precedence is less or equal to that of (y), or (x) is right-associative and its precedence is less than (y)
//              1. Pop (y) from the stack
//              2. Add (y) output buffer
//          2. Push (x) on the stack
//      3. Else if token is left parenthesis, then push it on the stack
//      4. Else if token is a right parenthesis
//          1. Until the top token (from the stack) is left parenthesis, pop from the stack to the output buffer
//          2. Also pop the left parenthesis but don’t include it in the output buffer
//      5. Else add token to output buffer
// 2. Pop any remaining operator tokens from the stack to the output

// Expression: 4 + 4 * 2 / (1 - 5)
//
//              | |   | |   | |   | |   | |   | |   | |   | |   | |   | |
//              | |   | |   | |   | |   | |   |-|   | |   | |   | |   | |
// Stack =>     | |   | |   | |   | |   |(|   |(|   | |   | |   | |   | |
//              | |   |*|   | |   |/|   |/|   |/|   | |   |/|   | |   | |
//              |+|   |+|   | |   |+|   |+|   |+|   | |   |+|   |+|   | |
//              |_|   |_|   |_|   |_|   |_|   |_|   |_|   |_|   |_|   |_|
// 
// Output =>   4     4     2 *               1     5  -        /     +
// If assemble the output, then the expression becomes: 442*15-/+