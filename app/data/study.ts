export type Info = {
    question: string;
    options: string[];
    correctAnswer: string;
    type?: "next" | "image" ;
    image?: string;
  };
  
  export const quizQuestions: Info[] = [
    {
      question: "A pointer in C is a variable that stores the memory address of another variable.",
      options: [],
      correctAnswer: "address",
      type: "next",
    },
    {
      question: "Image WIP)",
      options: [],
      correctAnswer: "pointer",
      type: "image",
      image: "../../assets/images/pointer.png", //WIP
    },
    {
      question: "Pointers are declared via *",
      options: [],
      correctAnswer: "address",
      type: "next",
    },
  ];
  