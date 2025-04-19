export type Info = {
    question: string;
    options: string[];
    correctAnswer: string;
    type?: "next" | "image" ;
    image?: string;
  };
  
  export const quizQuestions: Info[] = [
    {
      question: "A pointer in C is a variable that stores the address of another variable.",
      options: [],
      correctAnswer: "address",
      type: "next",
    },
    {
      question: "The & operator is used to get the address of a variable.",
      options: [],
      correctAnswer: "&",
      type: "next",
    },
    {
      question: "The * operator is used to access the value at a pointer’s address.",
      options: [],
      correctAnswer: "*",
      type: "next",
    },
    {
      question: "If `int *p;`, then `p` is a pointer to an int.",
      options: [],
      correctAnswer: "int",
      type: "next",
    },
    {
      question: "`int a = 10; int *p = &a;` — `*p` will have the value 10.",
      options: [],
      correctAnswer: "10",
      type: "next",
    },
      
  ];
  