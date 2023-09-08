export interface Task {
  task_id: number;
  task_name: string;
  task_description: string;
}

export const tasks: Task[] = [
  {
    task_id: 1,
    task_name: 'Makan malam',
    task_description: 'Keluarga',
  },
  {
    task_id: 2,
    task_name: 'Makan pagi',
    task_description: 'Keluarga',
  },
  {
    task_id: 3,
    task_name: 'Makan siang',
    task_description: 'Keluarga',
  },
];
