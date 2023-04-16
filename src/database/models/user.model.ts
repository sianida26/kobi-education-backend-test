import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export default class User extends Model {

    @Column
    id: number = -1;

    @Column
    username: string = "";

    @Column
    password: string = "";

    
}