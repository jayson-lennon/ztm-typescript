// You are developing a system to manage a list of tasks for a project
// management application. Each task has a title and a status indicating
// whether it is complete or incomplete. You need to iterate over the list of
// tasks and print out the tasks that are incomplete.
//
// Requirements:
//
// - Create an array of tasks, where each task is an object with the following
//   properties:
//   - `title`: a string representing the task's title.
//   - `completed`: a boolean indicating whether the task is complete (true) or
//     incomplete (false).
// - Use a for..of loop to iterate over the array of tasks.
// - Inside the loop, print out the title of each task that is incomplete, in
//   the format: "Incomplete Task: {title}".

const tasks = [
  { title: "Write project proposal", completed: true },
  { title: "Design UI mockups", completed: false },
  { title: "Develop backend API", completed: false },
  { title: "Test application", completed: true },
  { title: "Deploy to production", completed: false },
];

for (const task of tasks) {
  if (!task.completed) {
    console.log(`Incomplete Task: ${task.title}`);
  }
}

// Expected Output:
// Incomplete Task: Design UI mockups
// Incomplete Task: Develop backend API
// Incomplete Task: Deploy to production
