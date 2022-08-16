import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'difusaowebinc@gmail.com',
        password: '123',
        name: 'Difusão Web'
      },
      {
        email: 'pazwiatagan@gmail.com',
        password: '123',
        name: 'Wiatagan Paz'
      }
    ])
  }
}
