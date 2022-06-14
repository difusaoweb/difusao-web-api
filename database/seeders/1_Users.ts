import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'johnsistema@gmail.com',
        password: 'johnsistemaPASS123',
        name: 'John Sistema',
      },
      {
        email: 'pazwiatagan@gmail.com',
        password: '123456789',
        name: 'Wiatagan',
      },
    ])
  }
}
