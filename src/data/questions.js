export const questions = {
  Arrays: {
    Easy: [
      { id: 1, text: "Find the largest number in an array", hint: "Loop through array and track max value", time: 5 },
      { id: 2, text: "Find the smallest number in an array", hint: "Loop through array and track min value", time: 5 },
      { id: 3, text: "Print elements at even indexes", hint: "Loop and check index % 2 === 0", time: 4 },
      { id: 4, text: "Print elements at odd indexes", hint: "Loop and check index % 2 !== 0", time: 4 },
      { id: 5, text: "Reverse an array", hint: "Swap first and last elements, move inward", time: 5 },
      { id: 6, text: "Check if array is sorted", hint: "Compare current element with previous one", time: 5 },
      { id: 7, text: "Find second largest number in an array", hint: "Track largest and second largest", time: 6 },
      { id: 8, text: "Find sum of array elements", hint: "Loop and add each element to sum", time: 4 },
      { id: 9, text: "Count even and odd numbers in an array", hint: "Loop and use number % 2 check", time: 5 },
      { id: 10, text: "Check if a given number exists in an array", hint: "Loop and compare each element", time: 3 },
      { id: 11, text: "Find the first element of an array", hint: "Access arr[0]", time: 2 },
      { id: 12, text: "Find the last element of an array", hint: "Access arr[arr.length - 1]", time: 2 },
      { id: 13, text: "Swap first and last elements of an array", hint: "Use a temp variable", time: 4 },
      { id: 14, text: "Print array in reverse order", hint: "Loop from end to start", time: 4 },
      { id: 15, text: "Copy an array to another array", hint: "Use loop or slice method", time: 4 },
    ],
    Medium: [
      { id: 16, text: "Find the Most Frequent Element in an Array", hint: "Use a hashmap to count occurrences", time: 10 },
      { id: 17, text: "Find All Duplicates in an Array", hint: "Use a set to track seen elements", time: 15 },
      { id: 18, text: "Find the Intersection of Two Arrays", hint: "Use two pointers or a hashmap", time: 15 },
      { id: 19, text: "Find the Maximum Product Subarray", hint: "Use dynamic programming approach", time: 20 },
      { id: 20, text: "Find the Missing Number in an Array", hint: "Use sum formula or XOR method", time: 12 },
      { id: 21, text: "Move all zeros to the end of an array", hint: "Use two pointers to shift non-zero elements", time: 12 },
      { id: 22, text: "Find the Largest Sum Contiguous Subarray", hint: "Use Kadane’s Algorithm", time: 20 },
      { id: 23, text: "Rotate an array by K positions", hint: "Reverse parts of array or use extra array", time: 15 },
      { id: 24, text: "Find the Pair with Given Sum in an Array", hint: "Use hashmap for lookup or two pointers if sorted", time: 12 },
      { id: 25, text: "Check if array contains duplicates", hint: "Use set or hashmap to track elements", time: 10 },
      { id: 26, text: "Replace each element with product of all other elements", hint: "Use prefix and suffix products", time: 20 },
      { id: 27, text: "Find the Leaders in an Array", hint: "Loop from end and track max seen so far", time: 12 },
      { id: 28, text: "Find Equilibrium Index of an Array", hint: "Compare prefix sum and suffix sum", time: 15 },
    ],
    Hard: [
      { id: 29, text: "Rotate a 2D Array", hint: "Transpose the matrix and then reverse each row", time: 25 },
      { id: 30, text: "Find the Smallest Positive Number Missing from an Unsorted Array", hint: "Use index mapping", time: 30 },
      { id: 31, text: "Find the Maximum j - i such that arr[j] > arr[i]", hint: "Use a variation of Kadane's algorithm", time: 35 },
      { id: 32, text: "Find the Longest Subarray with Sum at Most K", hint: "Use sliding window technique", time: 30 },
      { id: 33, text: "Find the Subarray with Given Sum", hint: "Use prefix sum and hashmap", time: 30 },
      { id: 34, text: "Find the Maximum Sum Rectangle in a 2D Matrix", hint: "Use Kadane’s Algorithm for 2D", time: 40 },
      { id: 35, text: "Trapping Rain Water Problem", hint: "Use two-pointer or precomputed max arrays", time: 40 },
      { id: 36, text: "Maximum Sum Circular Subarray", hint: "Use modified Kadane’s algorithm", time: 35 },
      { id: 37, text: "Find the Longest Consecutive Sequence", hint: "Use set to check consecutive numbers", time: 35 },
      { id: 38, text: "Count Inversions in an Array", hint: "Use modified merge sort", time: 40 },
      { id: 39, text: "Find Median of Two Sorted Arrays", hint: "Use binary search approach", time: 45 },
      { id: 40, text: "Maximum Product of Two Elements in an Array", hint: "Find top two largest elements", time: 25 },
    ]
  },
  Strings: {
    Easy: [
      { id: 1, text: "Reverse a String", hint: "Use a loop or built-in reverse function", time: 5 },
      { id: 2, text: "Check if a String is a Palindrome", hint: "Compare string with its reverse", time: 6 },
      { id: 3, text: "Count Vowels and Consonants in a String", hint: "Iterate and check character types", time: 7 },
      { id: 4, text: "Remove All Whitespaces from a String", hint: "Use replace() or regular expressions", time: 6 },
      { id: 5, text: "Convert String to Integer", hint: "Use parseInt() or Number() functions", time: 5 },
      { id: 6, text: "Find First Non-Repeated Character", hint: "Use a hashmap to count occurrences", time: 8 },
      { id: 7, text: "Check if Two Strings are Anagrams", hint: "Sort both strings and compare", time: 8 },
      { id: 8, text: "Count Character Occurrences in a String", hint: "Use a hashmap to store counts", time: 7 },
      { id: 9, text: "Extract Digits from Alphanumeric String", hint: "Use regular expressions to match digits", time: 6 },
      { id: 10, text: "Convert String to Lowercase/Uppercase", hint: "Use toLowerCase() or toUpperCase()", time: 4 }
    ],
    Medium: [
      { id: 11, text: "Reverse Words in a String", hint: "Split, reverse, and join words", time: 10 },
      { id: 12, text: "Find Longest Substring Without Repeating Characters", hint: "Use sliding window technique", time: 12 },
      { id: 13, text: "Implement String Compression", hint: "Count consecutive characters and compress", time: 15 },
      { id: 14, text: "Find All Permutations of a String", hint: "Use backtracking or recursion", time: 15 },
      { id: 15, text: "Check if String is a Rotation of Another", hint: "Concatenate one string with itself and check if the other is a substring", time: 12 },
      { id: 16, text: "Implement strstr() Function", hint: "Use sliding window or brute force", time: 14 },
      { id: 17, text: "Find the Longest Palindromic Substring", hint: "Use dynamic programming or expand around center", time: 18 },
      { id: 18, text: "Replace All Spaces with '%20'", hint: "Use string manipulation or regular expressions", time: 10 },
      { id: 19, text: "Find All Anagrams in a String", hint: "Use sliding window and hashmap", time: 15 },
      { id: 20, text: "Implement Regular Expression Matching", hint: "Use dynamic programming", time: 20 }
    ],
    Hard: [
      { id: 21, text: "Implement Regular Expression Matching with '.' and '*'", hint: "Use dynamic programming with memoization", time: 25 },
      { id: 22, text: "Find the Longest Substring with At Most K Distinct Characters", hint: "Use sliding window technique", time: 20 },
      { id: 23, text: "Find the Smallest Window in a String that Contains All Characters of Another String", hint: "Use sliding window with hashmap", time: 25 },
      { id: 24, text: "Implement Wildcard Matching with '?' and '*'", hint: "Use dynamic programming", time: 30 },
      { id: 25, text: "Find the Minimum Number of Steps to Convert One String to Another (Edit Distance)", hint: "Use dynamic programming", time: 30 }
    ]
  },
  Numbers: {
    Easy: [
      { id: 1, text: "Check if a number is prime", hint: "Loop from 2 to sqrt(n) and check divisibility", time: 6 },
      { id: 2, text: "Find the factorial of a number", hint: "Use recursion or iteration", time: 5 },
      { id: 3, text: "Check if a number is even or odd", hint: "Use modulus operator", time: 3 },
      { id: 4, text: "Find the sum of digits of a number", hint: "Use modulus and division", time: 5 },
      { id: 5, text: "Count the number of digits in a number", hint: "Convert to string or use logarithm", time: 4 },
      { id: 6, text: "Reverse a number", hint: "Use modulus and division", time: 6 },
      { id: 7, text: "Find the greatest common divisor (GCD)", hint: "Use Euclidean algorithm", time: 7 },
      { id: 8, text: "Find the least common multiple (LCM)", hint: "Use formula LCM(a, b) = |a*b| / GCD(a, b)", time: 8 },
      { id: 9, text: "Check if a number is a perfect square", hint: "Take square root and square it again", time: 6 },
      { id: 10, text: "Find the sum of first N natural numbers", hint: "Use formula n(n+1)/2", time: 4 }
    ],
    Medium: [
      { id: 11, text: "Find the nth Fibonacci number", hint: "Use recursion or dynamic programming", time: 10 },
      { id: 12, text: "Check if a number is a power of two", hint: "Use bitwise AND", time: 6 },
      { id: 13, text: "Find the missing number in an array of 1 to N", hint: "Use sum formula or XOR method", time: 8 },
      { id: 14, text: "Find the majority element in an array", hint: "Use Boyer-Moore Voting Algorithm", time: 12 },
      { id: 15, text: "Find the longest consecutive sequence in an array", hint: "Use sorting or hashing", time: 15 },
      { id: 16, text: "Find the kth largest element in an array", hint: "Use quickselect or heap", time: 12 },
      { id: 17, text: "Find the intersection of two arrays", hint: "Use hashing or two-pointer technique", time: 10 },
      { id: 18, text: "Find the union of two arrays", hint: "Use hashing or set operations", time: 10 },
      { id: 19, text: "Find the common elements in three sorted arrays", hint: "Use three-pointer technique", time: 15 },
      { id: 20, text: "Find the subarray with the given sum", hint: "Use sliding window or prefix sum", time: 12 }
    ],
    Hard: [
      { id: 21, text: "Find the maximum product subarray", hint: "Use dynamic programming", time: 20 },
      { id: 22, text: "Find the longest subarray with sum at most K", hint: "Use sliding window technique", time: 18 },
      { id: 23, text: "Find the subarray with the given sum", hint: "Use prefix sum and hashmap", time: 20 },
      { id: 24, text: "Find the maximum sum rectangle in a 2D matrix", hint: "Use Kadane’s Algorithm for 2D", time: 25 },
      { id: 25, text: "Find the maximum sum circular subarray", hint: "Use modified Kadane’s algorithm", time: 25 },
      { id: 26, text: "Find the smallest positive number missing from an unsorted array", hint: "Use index mapping", time: 30 },
      { id: 27, text: "Find the longest increasing subsequence", hint: "Use dynamic programming or binary search", time: 30 },
      { id: 28, text: "Find the longest common subsequence", hint: "Use dynamic programming", time: 30 },
      { id: 29, text: "Find the edit distance between two strings", hint: "Use dynamic programming", time: 30 },
      { id: 30, text: "Find the median of two sorted arrays", hint: "Use binary search", time: 35 }
    ]
  },
  DataStructures: {
    Easy: [
      { id: 1, text: "Implement a Stack using Array or List", hint: "Use push and pop operations", time: 5 },
      { id: 2, text: "Implement a Queue using Array or List", hint: "Use enqueue and dequeue operations", time: 6 },
      { id: 3, text: "Use an ArrayList to store elements and print them", hint: "Use add() and get() methods", time: 5 },
      { id: 4, text: "Use a HashMap to store key-value pairs", hint: "Use put() and get() methods", time: 6 },
      { id: 5, text: "Use a HashSet to store unique elements", hint: "Use add() method and check for duplicates", time: 5 },
      { id: 6, text: "Check if a Stack is empty", hint: "Use isEmpty() method", time: 3 },
      { id: 7, text: "Check if a Queue is empty", hint: "Use isEmpty() method", time: 3 },
      { id: 8, text: "Find the size of an ArrayList, HashMap, or HashSet", hint: "Use size() method", time: 3 },
      { id: 9, text: "Remove an element from ArrayList, HashMap, or HashSet", hint: "Use remove() method", time: 4 },
      { id: 10, text: "Iterate through all elements in an ArrayList, HashMap, or HashSet", hint: "Use for-each loop or iterator", time: 5 }
    ],
    Medium: [
      { id: 11, text: "Implement a Stack using two Queues", hint: "Simulate stack operations using two queues", time: 12 },
      { id: 12, text: "Implement a Queue using two Stacks", hint: "Simulate queue operations using two stacks", time: 12 },
      { id: 13, text: "Find the first non-repeating element in a stream using HashMap", hint: "Keep track of counts and order", time: 15 },
      { id: 14, text: "Implement LRU Cache using HashMap and Doubly Linked List", hint: "Use HashMap for fast access and DLL for order", time: 20 },
      { id: 15, text: "Find duplicates in an array using HashSet", hint: "Check if element already exists in set", time: 10 },
      { id: 16, text: "Count frequency of elements using HashMap", hint: "Iterate and store counts in map", time: 10 },
      { id: 17, text: "Merge two HashMaps", hint: "Iterate and put entries from one map to another", time: 10 },
      { id: 18, text: "Check if two lists are equal", hint: "Compare size and elements in order", time: 8 },
      { id: 19, text: "Reverse an ArrayList", hint: "Use Collections.reverse() or manual swap", time: 8 },
      { id: 20, text: "Implement a Circular Queue using Array", hint: "Use modulo operation for wrapping around", time: 15 }
    ],
    Hard: [
      { id: 21, text: "Implement a Priority Queue from scratch", hint: "Use a heap (min or max) for storage", time: 25 },
      { id: 22, text: "Design a HashMap without using built-in libraries", hint: "Use array of buckets and handle collisions", time: 30 },
      { id: 23, text: "Find the Top K Frequent Elements", hint: "Use HashMap and PriorityQueue", time: 25 },
      { id: 24, text: "Implement a Stack that supports getMin() in O(1)", hint: "Use auxiliary stack to track minimum", time: 25 },
      { id: 25, text: "Implement a Queue using Circular Linked List", hint: "Maintain front and rear pointers", time: 25 },
      { id: 26, text: "Check if a sequence of operations is valid for Stack push/pop", hint: "Simulate stack operations", time: 20 },
      { id: 27, text: "Find longest consecutive elements sequence in an array", hint: "Use HashSet to check sequences", time: 25 },
      { id: 28, text: "Implement a Deque from scratch", hint: "Use doubly linked list to add/remove from both ends", time: 25 },
      { id: 29, text: "Merge K sorted arrays using PriorityQueue", hint: "Push elements to min-heap and extract in order", time: 30 },
      { id: 30, text: "Design a data structure with insert, delete, getRandom in O(1)", hint: "Use HashMap + ArrayList", time: 30 }
    ]
  },
  LinkedLists: {
    Easy: [
      { id: 1, text: "Implement a Singly Linked List", hint: "Create Node class and maintain head pointer", time: 10 },
      { id: 2, text: "Traverse a Linked List", hint: "Start from head and iterate till null", time: 5 },
      { id: 3, text: "Insert a node at the beginning", hint: "Update new node’s next to current head", time: 6 },
      { id: 4, text: "Insert a node at the end", hint: "Traverse to last node and update next pointer", time: 6 },
      { id: 5, text: "Delete a node from the beginning", hint: "Move head pointer to next node", time: 5 },
      { id: 6, text: "Delete a node from the end", hint: "Traverse to second last node and set next to null", time: 6 },
      { id: 7, text: "Count the number of nodes", hint: "Traverse and increment counter", time: 4 },
      { id: 8, text: "Search for an element in Linked List", hint: "Traverse and compare each node", time: 5 },
      { id: 9, text: "Reverse a Linked List iteratively", hint: "Use previous, current, next pointers", time: 10 },
      { id: 10, text: "Reverse a Linked List recursively", hint: "Use recursion to reverse links", time: 12 }
    ],
    Medium: [
      { id: 11, text: "Detect a cycle in a Linked List", hint: "Use Floyd’s Tortoise and Hare algorithm", time: 12 },
      { id: 12, text: "Find the middle node of a Linked List", hint: "Use slow and fast pointers", time: 8 },
      { id: 13, text: "Remove duplicates from a sorted Linked List", hint: "Traverse and skip duplicates", time: 10 },
      { id: 14, text: "Remove duplicates from an unsorted Linked List", hint: "Use HashSet to track seen values", time: 12 },
      { id: 15, text: "Find the nth node from the end", hint: "Use two-pointer approach", time: 10 },
      { id: 16, text: "Check if Linked List is a palindrome", hint: "Reverse second half and compare", time: 15 },
      { id: 17, text: "Merge two sorted Linked Lists", hint: "Use two pointers to merge", time: 12 },
      { id: 18, text: "Delete a node without head pointer", hint: "Copy next node’s data and delete next", time: 12 },
      { id: 19, text: "Detect and remove loop in Linked List", hint: "Use Floyd’s cycle detection and remove loop", time: 15 },
      { id: 20, text: "Rotate a Linked List by k nodes", hint: "Find kth node and adjust pointers", time: 15 }
    ],
    Hard: [
      { id: 21, text: "Flatten a multilevel Doubly Linked List", hint: "Use recursion or stack to flatten", time: 20 },
      { id: 22, text: "Reverse nodes in k-group", hint: "Reverse k nodes iteratively or recursively", time: 25 },
      { id: 23, text: "Add two numbers represented by Linked Lists", hint: "Use carry and traverse both lists", time: 20 },
      { id: 24, text: "Copy a Linked List with random pointer", hint: "Use hashmap or interleaving nodes", time: 25 },
      { id: 25, text: "Sort a Linked List using Merge Sort", hint: "Use divide and conquer", time: 25 },
      { id: 26, text: "Intersection point of two Linked Lists", hint: "Use length difference or two pointers", time: 20 },
      { id: 27, text: "Remove nodes which have a greater value on the right side", hint: "Reverse list, delete nodes, reverse back", time: 25 },
      { id: 28, text: "Swap nodes in pairs", hint: "Adjust pointers iteratively or recursively", time: 20 },
      { id: 29, text: "Segregate even and odd nodes", hint: "Maintain two lists and merge", time: 20 },
      { id: 30, text: "Rotate a Doubly Linked List", hint: "Adjust head and tail pointers", time: 25 }
    ]
  },
   Recursion: {
    Easy: [
      { id: 1, text: "Calculate factorial of a number", hint: "Use n * factorial(n-1)", time: 5 },
      { id: 2, text: "Calculate nth Fibonacci number", hint: "Use recursion: fib(n) = fib(n-1) + fib(n-2)", time: 6 },
      { id: 3, text: "Sum of first N natural numbers", hint: "Use sum(n) = n + sum(n-1)", time: 5 },
      { id: 4, text: "Reverse a string using recursion", hint: "Print last character first recursively", time: 6 },
      { id: 5, text: "Print numbers from 1 to N", hint: "Use recursion from 1 to N or N to 1", time: 4 },
      { id: 6, text: "Count digits of a number", hint: "Divide by 10 recursively and count", time: 5 },
      { id: 7, text: "Check if a string is palindrome", hint: "Compare first and last characters recursively", time: 6 },
      { id: 8, text: "Find GCD of two numbers", hint: "Use Euclid’s algorithm recursively", time: 5 },
      { id: 9, text: "Sum of array elements", hint: "Add first element to sum of rest recursively", time: 6 },
      { id: 10, text: "Find maximum element in an array", hint: "Compare first element with max of rest recursively", time: 6 }
    ],
    Medium: [
      { id: 11, text: "Power of a number (x^n)", hint: "Multiply x recursively n times", time: 6 },
      { id: 12, text: "Tower of Hanoi problem", hint: "Move n-1 disks recursively", time: 15 },
      { id: 13, text: "Print all subsets of a set", hint: "Use recursion to include/exclude elements", time: 12 },
      { id: 14, text: "Print all permutations of a string", hint: "Swap characters recursively", time: 15 },
      { id: 15, text: "Find all paths in a maze", hint: "Use recursion to explore all directions", time: 15 },
      { id: 16, text: "Sum of digits of a number", hint: "Return last digit + sum of remaining digits recursively", time: 6 },
      { id: 17, text: "Check if array is sorted", hint: "Compare first two elements and recurse on rest", time: 6 },
      { id: 18, text: "Count occurrences of an element in array", hint: "Check first element and recurse", time: 6 },
      { id: 19, text: "Find first index of an element in array", hint: "Check first element and recurse rest", time: 6 },
      { id: 20, text: "Reverse a linked list recursively", hint: "Reverse rest and adjust pointers", time: 12 }
    ],
    Hard: [
      { id: 21, text: "Solve N-Queens problem", hint: "Place queens row by row recursively", time: 25 },
      { id: 22, text: "Find all subsets with given sum", hint: "Include/exclude elements recursively", time: 20 },
      { id: 23, text: "Generate all binary strings of length N", hint: "Set 0 or 1 at each position recursively", time: 15 },
      { id: 24, text: "Find all permutations of array with duplicates", hint: "Use backtracking and skip duplicates", time: 20 },
      { id: 25, text: "Solve Rat in a Maze problem", hint: "Move in all directions recursively", time: 20 },
      { id: 26, text: "Sudoku Solver", hint: "Try all possible numbers recursively", time: 30 },
      { id: 27, text: "Generate all valid parentheses combinations", hint: "Use backtracking recursively", time: 20 },
      { id: 28, text: "Word Break problem", hint: "Check all splits recursively", time: 25 },
      { id: 29, text: "Find all paths from top-left to bottom-right in grid", hint: "Use recursion to explore moves", time: 20 },
      { id: 30, text: "Merge Sort using recursion", hint: "Divide array and merge recursively", time: 20 }
    ]
  },
  StacksQueues: {
    Easy: [
      { id: 1, text: "Implement a Stack using Array", hint: "Use push and pop operations", time: 5 },
      { id: 2, text: "Implement a Queue using Array", hint: "Use enqueue and dequeue operations", time: 6 },
      { id: 3, text: "Check if a Stack is empty", hint: "Use isEmpty() method or check size", time: 3 },
      { id: 4, text: "Check if a Queue is empty", hint: "Use isEmpty() method or check size", time: 3 },
      { id: 5, text: "Find the size of a Stack or Queue", hint: "Use size() method", time: 3 },
      { id: 6, text: "Peek the top/front element in Stack/Queue", hint: "Use peek() method", time: 4 },
      { id: 7, text: "Reverse a Stack using recursion", hint: "Pop elements recursively and insert at bottom", time: 8 },
      { id: 8, text: "Implement a Stack using Linked List", hint: "Push/pop at head", time: 6 },
      { id: 9, text: "Implement a Queue using Linked List", hint: "Enqueue at tail, dequeue at head", time: 6 },
      { id: 10, text: "Sort a Stack using another Stack", hint: "Use extra stack to maintain order", time: 10 }
    ],
    Medium: [
      { id: 11, text: "Implement a Stack using two Queues", hint: "Simulate push/pop with two queues", time: 12 },
      { id: 12, text: "Implement a Queue using two Stacks", hint: "Simulate enqueue/dequeue with two stacks", time: 12 },
      { id: 13, text: "Evaluate a Postfix Expression", hint: "Use a stack to compute values", time: 10 },
      { id: 14, text: "Convert Infix Expression to Postfix", hint: "Use stack for operators and precedence", time: 12 },
      { id: 15, text: "Check for Balanced Parentheses", hint: "Push opening, pop on closing", time: 8 },
      { id: 16, text: "Next Greater Element for each element in an array", hint: "Use stack to track next greater", time: 15 },
      { id: 17, text: "Implement a Circular Queue using Array", hint: "Use modulo for wrap-around", time: 12 },
      { id: 18, text: "Implement a Deque using Array or Linked List", hint: "Insert/remove from both ends", time: 12 },
      { id: 19, text: "Sort a Queue using recursion", hint: "Remove elements recursively and insert sorted", time: 15 },
      { id: 20, text: "Design a Stack that supports getMin() in O(1)", hint: "Use auxiliary stack to track min", time: 15 }
    ],
    Hard: [
      { id: 21, text: "Largest Rectangle in Histogram", hint: "Use stack to maintain increasing bars", time: 25 },
      { id: 22, text: "Trapping Rain Water Problem", hint: "Use stack to track bars or precompute max", time: 25 },
      { id: 23, text: "Sliding Window Maximum", hint: "Use deque to track max in window", time: 25 },
      { id: 24, text: "Implement LRU Cache using Doubly Linked List and HashMap", hint: "DLL for order, HashMap for O(1) access", time: 30 },
      { id: 25, text: "Maximum Rectangle in Binary Matrix", hint: "Use stack on each row as histogram", time: 30 },
      { id: 26, text: "Next Smaller Element", hint: "Similar to next greater element using stack", time: 20 },
      { id: 27, text: "Evaluate Prefix Expression", hint: "Traverse from end using stack", time: 20 },
      { id: 28, text: "Implement a Priority Queue from scratch", hint: "Use heap or balanced tree", time: 30 },
      { id: 29, text: "Celebrity Problem using Stack", hint: "Compare pairs and eliminate non-celebrities", time: 20 },
      { id: 30, text: "Check if Stack Sequence is Valid", hint: "Simulate push/pop operations", time: 20 }
    ]
  },
  Heaps: {
    Easy: [
      { id: 1, text: "Implement a Min Heap", hint: "Use array to store elements and maintain heap property", time: 10 },
      { id: 2, text: "Implement a Max Heap", hint: "Use array to store elements and maintain heap property", time: 10 },
      { id: 3, text: "Insert an element into a Heap", hint: "Add at end and heapify up", time: 5 },
      { id: 4, text: "Delete the root of a Heap", hint: "Replace root with last element and heapify down", time: 5 },
      { id: 5, text: "Get the minimum/maximum element from Heap", hint: "Return root element", time: 3 },
      { id: 6, text: "Heapify an array", hint: "Build heap from array in O(n) time", time: 8 },
      { id: 7, text: "Heap Sort", hint: "Build max-heap and extract elements", time: 12 },
      { id: 8, text: "Convert Min Heap to Max Heap", hint: "Heapify each element appropriately", time: 10 },
      { id: 9, text: "Check if an array represents a valid Heap", hint: "Compare parent with children", time: 5 },
      { id: 10, text: "Find Kth smallest/largest element using Heap", hint: "Use MinHeap or MaxHeap", time: 8 }
    ],
    Medium: [
      { id: 11, text: "Merge K sorted arrays using Heap", hint: "Use MinHeap to track smallest elements", time: 15 },
      { id: 12, text: "Find running median in a stream", hint: "Use two heaps (max-heap for left, min-heap for right)", time: 20 },
      { id: 13, text: "Top K frequent elements", hint: "Use HashMap + Heap to track frequencies", time: 15 },
      { id: 14, text: "Kth largest element in a stream", hint: "Maintain MinHeap of size K", time: 15 },
      { id: 15, text: "Find K closest numbers to X", hint: "Use MaxHeap of size K", time: 12 },
      { id: 16, text: "Sort a nearly sorted (k-sorted) array", hint: "Use MinHeap of size K+1", time: 15 },
      { id: 17, text: "Find median of two sorted arrays using Heap", hint: "Use MaxHeap and MinHeap", time: 20 },
      { id: 18, text: "Sliding window maximum using Heap", hint: "Use MaxHeap for each window", time: 18 },
      { id: 19, text: "Find K smallest/largest elements in an unsorted array", hint: "Use Heap to maintain top K", time: 12 },
      { id: 20, text: "Connect ropes with minimum cost", hint: "Use MinHeap to combine smallest ropes first", time: 15 }
    ],
    Hard: [
      { id: 21, text: "Median in a running stream of numbers", hint: "Use two heaps to balance left and right parts", time: 25 },
      { id: 22, text: "Maximum sum combination of two arrays", hint: "Use MaxHeap to track next max sum combinations", time: 25 },
      { id: 23, text: "Kth smallest element in a sorted matrix", hint: "Use MinHeap to track smallest elements", time: 25 },
      { id: 24, text: "Merge intervals with maximum overlap using Heap", hint: "Sort start/end times and use MinHeap", time: 30 },
      { id: 25, text: "Find K closest points to origin", hint: "Use MaxHeap to track closest points", time: 25 },
      { id: 26, text: "Task scheduling with cooling period", hint: "Use MaxHeap for frequencies", time: 30 },
      { id: 27, text: "Rearrange characters with distance constraint", hint: "Use MaxHeap for frequency and position", time: 30 },
      { id: 28, text: "Sliding window median", hint: "Use two heaps to balance window elements", time: 30 },
      { id: 29, text: "Find K pairs with smallest sums from two arrays", hint: "Use MinHeap to track next smallest sum", time: 25 },
      { id: 30, text: "Maximum frequency stack (like LeetCode FreqStack)", hint: "Use HashMap + Heap", time: 30 }
    ]
  },
  TreesGraphs: {
    Easy: [
      { id: 1, text: "Implement a Binary Tree", hint: "Create Node class with left and right pointers", time: 10 },
      { id: 2, text: "Traverse a Binary Tree in Preorder", hint: "Use recursion: root -> left -> right", time: 5 },
      { id: 3, text: "Traverse a Binary Tree in Inorder", hint: "Use recursion: left -> root -> right", time: 5 },
      { id: 4, text: "Traverse a Binary Tree in Postorder", hint: "Use recursion: left -> right -> root", time: 5 },
      { id: 5, text: "Find height of a Binary Tree", hint: "Max of left and right subtree heights + 1", time: 6 },
      { id: 6, text: "Count number of nodes in Binary Tree", hint: "Sum left + right + 1 recursively", time: 5 },
      { id: 7, text: "Check if a Binary Tree is balanced", hint: "Compare heights of left and right subtrees", time: 8 },
      { id: 8, text: "Check if a Binary Tree is symmetric", hint: "Compare left and right subtrees recursively", time: 8 },
      { id: 9, text: "Find minimum and maximum in a BST", hint: "Go left for min, right for max", time: 5 },
      { id: 10, text: "Search an element in BST", hint: "Use BST property: left < root < right", time: 5 }
    ],
    Medium: [
      { id: 11, text: "Level order traversal (BFS) of Binary Tree", hint: "Use queue to traverse level by level", time: 8 },
      { id: 12, text: "Lowest Common Ancestor (LCA) in BST", hint: "Compare values and move left/right", time: 10 },
      { id: 13, text: "Check if a tree is a valid BST", hint: "Use min/max constraints recursively", time: 10 },
      { id: 14, text: "Find diameter of a Binary Tree", hint: "Use height + max of left and right diameters", time: 12 },
      { id: 15, text: "Serialize and Deserialize a Binary Tree", hint: "Use preorder traversal with null markers", time: 15 },
      { id: 16, text: "Invert/Flip a Binary Tree", hint: "Swap left and right recursively", time: 8 },
      { id: 17, text: "Path sum in Binary Tree", hint: "Check sum recursively along root-to-leaf paths", time: 10 },
      { id: 18, text: "Count leaf nodes in a Binary Tree", hint: "Check if node.left & node.right null", time: 6 },
      { id: 19, text: "Find all root-to-leaf paths", hint: "Use recursion to track path", time: 10 },
      { id: 20, text: "Convert BST to Sorted Doubly Linked List", hint: "Inorder traversal and link nodes", time: 12 }
    ],
    Hard: [
      { id: 21, text: "Serialize and Deserialize N-ary Tree", hint: "Use preorder traversal with child counts", time: 20 },
      { id: 22, text: "Maximum path sum in Binary Tree", hint: "Use recursion to track max path through node", time: 25 },
      { id: 23, text: "Construct Binary Tree from Inorder and Preorder", hint: "Use recursive division using inorder positions", time: 25 },
      { id: 24, text: "Construct Binary Tree from Inorder and Postorder", hint: "Similar to above with postorder root", time: 25 },
      { id: 25, text: "Word Ladder problem using BFS (Graph)", hint: "Transform words layer by layer", time: 30 },
      { id: 26, text: "Number of Islands (DFS/BFS on grid)", hint: "Use DFS/BFS to mark visited land", time: 20 },
      { id: 27, text: "Clone a Graph", hint: "Use DFS/BFS with hashmap to copy nodes", time: 25 },
      { id: 28, text: "Minimum Spanning Tree (Kruskal/Prim)", hint: "Use union-find or priority queue", time: 30 },
      { id: 29, text: "Shortest Path in Weighted Graph (Dijkstra)", hint: "Use MinHeap/priority queue", time: 25 },
      { id: 30, text: "Detect cycle in Directed Graph", hint: "Use DFS + recursion stack", time: 20 }
    ]
  },
  DynamicProgramming: {
    Easy: [
      { id: 1, text: "Fibonacci number (recursive & DP)", hint: "Use memoization or tabulation", time: 6 },
      { id: 2, text: "Climbing stairs problem", hint: "Ways to reach nth stair = dp[n-1] + dp[n-2]", time: 6 },
      { id: 3, text: "Factorial using DP", hint: "Store intermediate results in array", time: 5 },
      { id: 4, text: "Sum of first N numbers", hint: "Use DP array to store cumulative sum", time: 4 },
      { id: 5, text: "Count ways to reach nth stair with 1 or 2 steps", hint: "Similar to Fibonacci", time: 6 },
      { id: 6, text: "Min cost path in matrix", hint: "dp[i][j] = cost[i][j] + min(dp[i-1][j], dp[i][j-1])", time: 10 },
      { id: 7, text: "Longest common prefix", hint: "Store results of prefixes", time: 6 },
      { id: 8, text: "Coin change (number of ways) with unlimited coins", hint: "Use DP array to track combinations", time: 10 },
      { id: 9, text: "Frog jump problem", hint: "Minimum cost to reach last stone", time: 8 },
      { id: 10, text: "House Robber problem (1D DP)", hint: "dp[i] = max(dp[i-1], dp[i-2]+nums[i])", time: 8 }
    ],
    Medium: [
      { id: 11, text: "0/1 Knapsack problem", hint: "Use dp[i][w] = max(include, exclude)", time: 15 },
      { id: 12, text: "Longest Increasing Subsequence (LIS)", hint: "dp[i] = max(dp[j]+1) for j<i and arr[j]<arr[i]", time: 15 },
      { id: 13, text: "Edit Distance", hint: "dp[i][j] = min(insert, delete, replace)", time: 20 },
      { id: 14, text: "Longest Common Subsequence (LCS)", hint: "dp[i][j] = if same:1+dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1])", time: 15 },
      { id: 15, text: "Partition Equal Subset Sum", hint: "Subset sum DP", time: 15 },
      { id: 16, text: "Matrix Chain Multiplication", hint: "dp[i][j] = min cost to multiply matrices i to j", time: 20 },
      { id: 17, text: "Maximum sum subarray (Kadane with DP)", hint: "dp[i] = max(arr[i], dp[i-1]+arr[i])", time: 12 },
      { id: 18, text: "Longest Palindromic Subsequence", hint: "dp[i][j] = if s[i]==s[j]: 2+dp[i+1][j-1], else max(dp[i+1][j], dp[i][j-1])", time: 15 },
      { id: 19, text: "Minimum jumps to reach end", hint: "dp[i] = min(dp[j]+1) where j can jump to i", time: 15 },
      { id: 20, text: "Distinct Subsequences", hint: "dp[i][j] = if s[i]==t[j]: dp[i-1][j-1]+dp[i-1][j]", time: 15 }
    ],
    Hard: [
      { id: 21, text: "Edit Distance with operation costs", hint: "Extend standard edit distance with custom costs", time: 25 },
      { id: 22, text: "Longest Increasing Path in a Matrix", hint: "DFS + memoization", time: 25 },
      { id: 23, text: "Burst Balloons problem", hint: "DP with range of balloons", time: 25 },
      { id: 24, text: "Palindrome Partitioning II", hint: "Min cuts using DP", time: 25 },
      { id: 25, text: "Maximum Profit in Job Scheduling", hint: "DP with sorting jobs by end time", time: 25 },
      { id: 26, text: "Word Break II", hint: "Backtracking + DP memoization", time: 25 },
      { id: 27, text: "Russian Doll Envelopes", hint: "Sort envelopes + LIS on heights", time: 25 },
      { id: 28, text: "Interleaving Strings", hint: "dp[i][j] = s1[i]+s2[j] to form s3", time: 25 },
      { id: 29, text: "Minimum Cost to Merge Stones", hint: "DP on range with prefix sums", time: 30 },
      { id: 30, text: "Trapping Rain Water II (2D DP)", hint: "DP for max heights row-wise & col-wise", time: 30 }
    ]
  },
  BitMath: {
    Easy: [
      { id: 1, text: "Check if a number is even or odd using bits", hint: "Use n & 1", time: 3 },
      { id: 2, text: "Get ith bit of a number", hint: "Use (n >> i) & 1", time: 4 },
      { id: 3, text: "Set ith bit of a number", hint: "Use n | (1 << i)", time: 4 },
      { id: 4, text: "Clear ith bit of a number", hint: "Use n & ~(1 << i)", time: 4 },
      { id: 5, text: "Toggle ith bit of a number", hint: "Use n ^ (1 << i)", time: 4 },
      { id: 6, text: "Count number of set bits in a number", hint: "Use Brian Kernighan’s algorithm", time: 5 },
      { id: 7, text: "Check if a number is a power of 2", hint: "Use n & (n-1)", time: 4 },
      { id: 8, text: "Find the only non-repeating element in an array (XOR)", hint: "XOR all elements", time: 6 },
      { id: 9, text: "Swap two numbers without using a temp variable", hint: "Use XOR swap or arithmetic", time: 4 },
      { id: 10, text: "Find XOR of all numbers from 1 to N", hint: "Use pattern or iterative XOR", time: 5 }
    ],
    Medium: [
      { id: 11, text: "Find two non-repeating numbers in an array where all others repeat", hint: "Use XOR and partitioning", time: 10 },
      { id: 12, text: "Find missing number in array of 1 to N using XOR", hint: "XOR all indices and numbers", time: 8 },
      { id: 13, text: "Count bits for all numbers from 0 to N", hint: "Use DP on bits", time: 10 },
      { id: 14, text: "Find the longest consecutive sequence using bits", hint: "Use bitmasking", time: 12 },
      { id: 15, text: "Check if two numbers have opposite signs", hint: "Use (a ^ b) < 0", time: 6 },
      { id: 16, text: "Power of a number (x^n) using recursion + bit manipulation", hint: "Divide exponent using bits", time: 10 },
      { id: 17, text: "Multiply two numbers using bit manipulation", hint: "Use shift and add", time: 8 },
      { id: 18, text: "Divide two numbers using bit manipulation", hint: "Use repeated subtraction and shift", time: 12 },
      { id: 19, text: "Find modulo without using % operator", hint: "Use subtraction or bit manipulation", time: 8 },
      { id: 20, text: "Check if a number is a power of 4", hint: "n > 0, n & (n-1)==0 and n%3==1", time: 6 }
    ],
    Hard: [
      { id: 21, text: "Maximum XOR of two numbers in an array", hint: "Use Trie for efficient solution", time: 20 },
      { id: 22, text: "Subset sum using bits", hint: "Use bitmask to generate all subsets", time: 20 },
      { id: 23, text: "Count total set bits from 1 to N", hint: "Use pattern and bit manipulation", time: 20 },
      { id: 24, text: "Find missing and repeating number in array", hint: "Use XOR for both", time: 20 },
      { id: 25, text: "Divide two numbers without using *, /, %", hint: "Use bit shifts recursively", time: 25 },
      { id: 26, text: "Find two numbers with maximum AND value", hint: "Use bit-by-bit check", time: 20 },
      { id: 27, text: "Find all subsets of a set using bitmask", hint: "Iterate 0 to 2^n-1", time: 15 },
      { id: 28, text: "Count numbers with exactly k set bits", hint: "Use combinatorics + bits", time: 20 },
      { id: 29, text: "Find XOR of all subsets", hint: "Use properties of XOR", time: 20 },
      { id: 30, text: "Maximum AND subset of size k", hint: "Use binary search + bitmask", time: 25 }
    ]
  }
};

