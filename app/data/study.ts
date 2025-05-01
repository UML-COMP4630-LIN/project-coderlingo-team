 /*
    * File: study.ts
    * Description: A list of study passages for the study modules 
*/

export type Study = {
  question: string;
  options?: string[];
  correctAnswer?: string;
  type?: "next" | "image" | "read";
  image?: string;
};

//https://www.geeksforgeeks.org/c-pointers/
//CREDITS TO WEBSITE AUTHOR
export const StudyQuestions: Study[] = [
  {
    question: "A pointer is a variable that stores the memory address of another variable. Instead of holding a direct value, it has the address where the value is stored in memory. This allows us to manipulate the data stored at a specific memory location without actually using its variable. It is the backbone of low-level memory manipulation in C.",
    type: "read",
  },
  {
    question: "A pointer is declared by specifying its name and type, just like simple variable declaration but with an asterisk (*) symbol added before the pointer’s name.Here, data_type defines the type of data that the pointer is pointing to. An integer type pointer can only point to an integer. Similarly, a pointer of float type can point to a floating-point data, and so on.",
    type: "image",
    image: "images/icons/image1.png",
  },
  {
    question: "In the bellow code, pointer ptr can store the address of an integer. It is pronounced as pointer to integer.",
    type: "image",
    image: "images/icons/image3.png",
  },
  {
    question: "Pointer initialization means assigning some address to the pointer variable. In C, the (&) addressof operator is used to get the memory address of any variable. This memory address is then stored in a pointer variable.",
    type: "read",
  },
  {
    question: "In the image bellow, pointer ptr store the address of variable x which was determined using address-of operator (&).",
    type: "image",
    image: "images/icons/image4.png",
  },
  {
      question: "Accessing the pointer directly will just give us the address that is stored in the pointer. ",
      type: "image",
      image: "images/icons/image2.png",
  },
  {
    question: "The size of a pointer in C depends on the architecture (bit system) of the machine, not the data type it points to. On a 32-bit system, all pointers typically occupy 4 bytes.On a 64-bit system, all pointers typically occupy 8 bytes.",
    type: "read",
  },
  {
    question: "The NULL Pointers are those pointers that do not point to any memory location. They can be created by assigning NULL value to the pointer. A pointer of any type can be assigned the NULL value.",
    type: "image",
    image: "images/icons/image5.png",
  },
  {
    question: "The void pointers in C are the pointers of type void. It means that they do not have any associated data type. They are also called generic pointers as they can point to any type and can be typecasted to any type.",
    type: "image",
    image: "images/icons/image6.png",
  },
  {
    question: "The wild pointers are pointers that have not been initialized with something yet. These types of C-pointers can cause problems in our programs and can eventually cause them to crash. If values are updated using wild pointers, they could cause data abort or data corruption.",
    type: "image",
    image: "images/icons/image7.png",
  },
  {
    question: "A pointer pointing to a memory location that has been deleted (or freed) is called a dangling pointer. Such a situation can lead to unexpected behavior in the program and also serve as a source of bugs in C programs.",
    type: "read",
  },

//to do
//https://www.geeksforgeeks.org/pointer-arithmetics-in-c-with-examples/
];