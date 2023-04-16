import User from "../database/models/user.model";

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await User.findByPk(id);
    return user;
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = await User.create({ username, password });
    return user;
  }

  async updateUser(id: number, name: string, username: string): Promise<[number, User[]]> {
    const [rowsUpdated, updatedUser] = await User.update({ username }, { where: { id }, returning: true });
    return [rowsUpdated, updatedUser];
  }

  async deleteUser(id: number): Promise<number> {
    const rowsDeleted = await User.destroy({ where: { id } });
    return rowsDeleted;
  }
}
