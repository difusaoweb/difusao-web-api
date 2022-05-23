import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      username: 'johnsistema',
      email: 'johnsistema@gmail.com',
      password: 'johnsistemaPASS123',
    })
  }
}
