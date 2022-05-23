import { v4 as uuidV4 } from 'uuid'


class Task {
  id?: string
  name: string;
  description: string;
  createdAt: Date;
  finallyDate: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Task }