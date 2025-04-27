export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  type?: "mcq" | "truefalse" | "fillblank" | "match";
  subtopic: "pointer basics" | "memory management" | "pointer arithmetic" | "pointer errors" | "double pointers";
};
// bookmark
export type Bookmark = {
  question: string;
  answerOptions: string[];
};

export const quizQuestions: Question[] = [
  {
    question: "A pointer in C is a variable that stores the __________ of another variable.",
    options: [],
    correctAnswer: "address",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "The __________ operator is used to get the address of a variable.",
    options: [],
    correctAnswer: "&",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "The __________ operator is used to access the value at a pointer’s address.",
    options: [],
    correctAnswer: "*",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "If `int *p;`, then `p` is a pointer to an __________.",
    options: [],
    correctAnswer: "int",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "`int a = 10; int *p = &a;` — `*p` will have the value __________.",
    options: [],
    correctAnswer: "10",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "You allocate memory dynamically in C using the __________ function.",
    options: [],
    correctAnswer: "malloc",
    type: "fillblank",
    subtopic: "memory management"
  },
  {
    question: "The function used to deallocate memory is __________.",
    options: [],
    correctAnswer: "free",
    type: "fillblank",
    subtopic: "memory management"
  },
  {
    question: "`char *str = \"Hello\";` — `str` points to a __________.",
    options: [],
    correctAnswer: "string",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "The pointer `NULL` means the pointer points to __________.",
    options: [],
    correctAnswer: "nothing",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "The size of a pointer in a 64-bit system is typically __________ bytes.",
    options: [],
    correctAnswer: "8",
    type: "fillblank",
    subtopic: "pointer basics"
  },
  {
    question: "What does `int *p;` declare?",
    options: [
      "A pointer to a float",
      "A pointer to an int",
      "An int",
      "An array of int"
    ],
    correctAnswer: "A pointer to an int",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "What is the output of: int x = 5; int *p = &x; printf(\"%d\", *p);",
    options: [
      "3",
      "5",
      "x",
      "*p"
    ],
    correctAnswer: "5",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "Which function is used for dynamic memory allocation?",
    options: [
      "calloc()",
      "malloc()",
      "assign()",
      "memset()"
    ],
    correctAnswer: "malloc()",
    type: "mcq",
    subtopic: "memory management"
  },
  {
    question: "Which keyword is used to free allocated memory?",
    options: [
      "delete",
      "free",
      "remove",
      "clear"
    ],
    correctAnswer: "free",
    type: "mcq",
    subtopic: "memory management"
  },
  {
    question: "Which of these is a correct way to declare a pointer to a float?",
    options: [
      "float p*",
      "float *p",
      "*float p",
      "float& p"
    ],
    correctAnswer: "float *p",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "What is `*(&x)` equal to?",
    options: [
      "Address of x",
      "Value of x",
      "x",
      "&x"
    ],
    correctAnswer: "Value of x",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "What does `int **pp;` mean?",
    options: [
      "Pointer to int",
      "Pointer to float",
      "Pointer to a pointer to an int",
      "Pointer to a pointer to a float"
    ],
    correctAnswer: "Pointer to a pointer to an int",
    type: "mcq",
    subtopic: "double pointers"
  },
  {
    question: "What happens if you dereference a NULL pointer?",
    options: [
      "Nothing",
      "Runtime error / crash",
      "Returns 0",
      "Compiles fine"
    ],
    correctAnswer: "Runtime error / crash",
    type: "mcq",
    subtopic: "pointer errors"
  },
  {
    question: "Which is the correct way to assign an address to a pointer?",
    options: [
      "p = x;",
      "*p = x;",
      "p = &x;",
      "&p = x;"
    ],
    correctAnswer: "p = &x;",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "Which of these types will `malloc(sizeof(int))` return?",
    options: [
      "int *",
      "float *",
      "void *",
      "char *"
    ],
    correctAnswer: "void *",
    type: "mcq",
    subtopic: "memory management"
  },
  {
    question: "What does `*(arr + i)` mean for an array `arr[]`?",
    options: [
      "arr[i]",
      "arr+i",
      "*(arr) + i",
      "&arr[i]"
    ],
    correctAnswer: "arr[i]",
    type: "mcq",
    subtopic: "pointer arithmetic"
  },
  {
    question: "Which header file is needed for malloc()?",
    options: [
      "stdio.h",
      "stdlib.h",
      "malloc.h",
      "string.h"
    ],
    correctAnswer: "stdlib.h",
    type: "mcq",
    subtopic: "memory management"
  },
  {
    question: "What is the output of: int a = 10; int *p = &a; *p = 20; printf(\"%d\", a);",
    options: [
      "10",
      "20",
      "*p",
      "a"
    ],
    correctAnswer: "20",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "If `int *p = NULL;`, which statement is TRUE?",
    options: [
      "p points to address 0",
      "p is uninitialized",
      "p points to a value",
      "p has garbage"
    ],
    correctAnswer: "p points to address 0",
    type: "mcq",
    subtopic: "pointer errors"
  },
  {
    question: "What is the default value of an uninitialized pointer?",
    options: [
      "0",
      "NULL",
      "Undefined",
      "None"
    ],
    correctAnswer: "Undefined",
    type: "mcq",
    subtopic: "pointer errors"
  },
  {
    question: "What will this print? int a = 100; int *p = &a; printf(\"%p\", p);",
    options: [
      "100",
      "Address of p",
      "Address of a",
      "*p"
    ],
    correctAnswer: "Address of a",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "Which of the following can cause segmentation fault?",
    options: [
      "printf()",
      "Dereferencing a NULL pointer",
      "int a = 0;",
      "scanf()"
    ],
    correctAnswer: "Dereferencing a NULL pointer",
    type: "mcq",
    subtopic: "pointer errors"
  },
  {
    question: "Which of the following is TRUE?",
    options: [
      "*p++ and *(p++) are same",
      "*p++ and *(p++) are different",
      "Both invalid",
      "None"
    ],
    correctAnswer: "*p++ and *(p++) are different",
    type: "mcq",
    subtopic: "pointer arithmetic"
  },
  {
    question: "Pointer arithmetic is only valid with:",
    options: [
      "Strings",
      "Integers",
      "Arrays and dynamically allocated memory",
      "Structs"
    ],
    correctAnswer: "Arrays and dynamically allocated memory",
    type: "mcq",
    subtopic: "pointer arithmetic"
  },
  {
    question: "`sizeof(int*)` on a 32-bit system typically returns:",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    correctAnswer: "4",
    type: "mcq",
    subtopic: "pointer basics"
  },
  {
    question: "A pointer must always be initialized before use.",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "pointer errors"
  },
  {
    question: "The `malloc()` function returns a pointer of type `void *`.",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "memory management"
  },
  {
    question: "You can perform arithmetic on void pointers in C.",
    options: ["True", "False"],
    correctAnswer: "False",
    type: "truefalse",
    subtopic: "pointer arithmetic"
  },
  {
    question: "The `&` operator gets the address of a variable.",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "pointer basics"
  },
  {
    question: "You can use the `*` operator to both declare and dereference a pointer.",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "pointer basics"
  },
  {
    question: "Accessing freed memory causes undefined behavior.",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "pointer errors"
  },
  {
    question: "All pointers in C are of the same size.",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "pointer basics"
  },
  {
    question: "A pointer can be used to modify the value of a variable in a function (pass by reference).",
    options: ["True", "False"],
    correctAnswer: "True",
    type: "truefalse",
    subtopic: "pointer basics"
  },
  {
    question: "`char *str = \"Hello\";` creates a mutable string.",
    options: ["True", "False"],
    correctAnswer: "False",
    type: "truefalse",
    subtopic: "pointer errors"
  },
  {
    question: "You can assign an `int *` to a `float *` without casting.",
    options: ["True", "False"],
    correctAnswer: "False",
    type: "truefalse",
    subtopic: "pointer errors"
  },
  {
    question: "int *p",
    options: ["Pointer to int", "Pointer to float", "Address of int", "Int value"],
    correctAnswer: "Pointer to int",
    type: "match",
    subtopic: "pointer basics"
  },
  {
    question: "*p",
    options: ["Value pointed to by p", "Address of p", "Pointer to p", "None"],
    correctAnswer: "Value pointed to by p",
    type: "match",
    subtopic: "pointer basics"
  },
  {
    question: "&x",
    options: ["Value of x", "Address of x", "Pointer to x", "None"],
    correctAnswer: "Address of x",
    type: "match",
    subtopic: "pointer basics"
  },
  {
    question: "p = &x",
    options: ["Assign x to p", "Assign address of x to p", "Dereference x", "None"],
    correctAnswer: "Assign address of x to p",
    type: "match",
    subtopic: "pointer basics"
  },
  {
    question: "malloc(size)",
    options: ["Allocates memory", "Frees memory", "Copies memory", "None"],
    correctAnswer: "Allocates memory",
    type: "match",
    subtopic: "memory management"
  },
  {
    question: "free(p)",
    options: ["Frees memory", "Allocates memory", "Points to NULL", "None"],
    correctAnswer: "Frees memory",
    type: "match",
    subtopic: "memory management"
  },
  {
    question: "NULL",
    options: ["Null pointer", "Zero", "Address of x", "None"],
    correctAnswer: "Null pointer",
    type: "match",
    subtopic: "pointer basics"
  },
  {
    question: "p++",
    options: ["Move pointer to next element", "Increment value", "Move to previous", "None"],
    correctAnswer: "Move pointer to next element",
    type: "match",
    subtopic: "pointer arithmetic"
  },
  {
    question: "*(p+1)",
    options: ["Access next element value", "Access current value", "Access pointer", "None"],
    correctAnswer: "Access next element value",
    type: "match",
    subtopic: "pointer arithmetic"
  },
  {
    question: "int **pp",
    options: ["Pointer to pointer to int", "Pointer to float", "Double pointer", "Pointer to int"],
    correctAnswer: "Pointer to pointer to int",
    type: "match",
    subtopic: "double pointers"
  }  
];
