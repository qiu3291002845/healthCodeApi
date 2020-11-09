import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { nullable: true, comment: '城市' })
  city: string;

  @Column('varchar', { nullable: true, comment: '省份' })
  province: string;

  @Column('varchar', {
    nullable: true,
    comment: '头像地址',
    default:
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2975996532,2425031589&fm=26&gp=0.jpg',
  })
  avatarUrl: string;

  @Column('varchar', { nullable: true, comment: '国家' })
  country: string;

  @Column('int', { nullable: false, default: 1, comment: '性别' })
  gender: 1 | 2;

  @Column('varchar', { nullable: true, comment: '语言' })
  language: string;

  @Column('varchar', { nullable: false, comment: '昵称' })
  nickName: string;

  @Column('varchar', { nullable: false, comment: 'openId' })
  openid: string;
}
