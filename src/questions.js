export const questions = [
  {
    number: "A1",
    question: "Does your child look at you when you call their name?",
    options: [
      { key: "Always", value: 0 },
      { key: "Usually", value: 0 },
      { key: "Sometimes", value: 1 },
      { key: "Rarely", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A2",
    question: "How easy is it for you to get eye contact with your child?",
    options: [
      { key: "Very easy", value: 0 },
      { key: "Quite easy", value: 0 },
      { key: "Quite difficult", value: 1 },
      { key: "Very difficult", value: 1 },
      { key: "Impossible", value: 1 },
    ],
  },
  {
    number: "A3",
    question: "Does your child point to indicate he/she want something?",
    options: [
      { key: "Many times a day", value: 0 },
      { key: "A few times a day", value: 0 },
      { key: "A few times a week", value: 1 },
      { key: "Less than once a week", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A4",
    question:
      "Does your child point to share interest with you? (e.g Pointing at an interesting sight?)",
    options: [
      { key: "Many times a day", value: 0 },
      { key: "A few times a day", value: 0 },
      { key: "A few times a week", value: 1 },
      { key: "Less than once a week", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A5",
    question:
      "Does your child pretend? (e.g Care for dolls, talk on a toy phone?)",
    options: [
      { key: "Many times a day", value: 0 },
      { key: "A few times a day", value: 0 },
      { key: "A few times a week", value: 1 },
      { key: "Less than once a week", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A6",
    question: "Does your child follow when you are looking?",
    options: [
      { key: "Many times a day", value: 0 },
      { key: "A few times a day", value: 0 },
      { key: "A few times a week", value: 1 },
      { key: "Less than once a week", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A7",
    question:
      "Does your child respond appropriately to emotions, like being upset when someone is crying?",
    options: [
      { key: "Always", value: 0 },
      { key: "Usually", value: 0 },
      { key: "Sometimes", value: 1 },
      { key: "Rarely", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A8",
    question: "Would you describe your child's first words as:  ",
    options: [
      { key: "Very typical", value: 0 },
      { key: "Quite typical", value: 0 },
      { key: "Slightly unusual", value: 1 },
      { key: "Very unusual", value: 1 },
      { key: "My child doesn't speak", value: 1 },
    ],
  },
  {
    number: "A9",
    question: "Does your child use simple gestures, like waving goodbye?",
    options: [
      { key: "Many times a day", value: 0 },
      { key: "A few times a day", value: 0 },
      { key: "A few times a week", value: 1 },
      { key: "Less than once a week", value: 1 },
      { key: "Never", value: 1 },
    ],
  },
  {
    number: "A10",
    question: "Does your child stare at nothing with no apparent purpose?",
    options: [
      { key: "Many times a day", value: 1 },
      { key: "A few times a day", value: 1 },
      { key: "A few times a week", value: 1 },
      { key: "Less than once a week", value: 0 },
      { key: "Never", value: 0 },
    ],
  },
  {
    number: "Age",
    question: "How old is the person taking the test (in months)?",
    inputType: "number",
  },
  {
    number: "Sex",
    question: "Please select the sex",
    options: [
      { key: "Male", value: 0 },
      { key: "Female", value: 1 },
    ],
  },
  {
    number: "Jaundice",
    question: "Did the person have jaundice as a newborn?",
    options: [
      { key: "Yes", value: 1 },
      { key: "No", value: 0 },
    ],
  },
  {
    number: "Family_mem_with_ASD",
    question: "Do you have any family members diagnosed with ASD?",
    options: [
      { key: "Yes", value: 1 },
      { key: "No", value: 0 },
    ],
  },
  {
    question: "Who is completing this test?",
    options: [
      { key: "Family member", text: "Test_completed_by_family_member" },
      {
        key: "HealthCare Professional",
        text: "Test_completed_by_health_care_professional",
      },
      { key: "Others", text: "Test_completed_by_others" },
      { key: "Self", text: "Test_completed_by_self" },
    ],
  },
];
