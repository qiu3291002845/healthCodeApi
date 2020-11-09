import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClockIn {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { nullable: false, comment: '姓名' })
  name: string;

  @Column('varchar', { nullable: false, comment: '身份证' })
  idCard: string;

  @Column('int', { nullable: false, comment: '联系电话' })
  phone: number;

  @Column('varchar', { nullable: false, comment: '当前所在地址' })
  address: string;

  @Column('int', {
    nullable: false,
    comment: '近期是否接触新冠肺炎确诊或疑似患者',
  })
  isContactPneumoniaInfected: 1 | 2 | 3;

  @Column('int', { nullable: false, comment: '当前健康症状' })
  symptom: number;

  @Column('double', { nullable: false, comment: '当前体温℃' })
  bodyTemperature: number;

  @Column('varchar', { nullable: false, comment: 'openId' })
  userOpenId: string;
}
